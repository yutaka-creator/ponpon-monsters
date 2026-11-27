begin;
create table if not exists public.ponpon_event_visits (
 visitor_id uuid not null references auth.users(id) on delete cascade,
 room_id uuid not null references public.ponpon_rooms(user_id) on delete cascade,
 primary key(visitor_id,room_id), check(visitor_id<>room_id)
);
alter table public.ponpon_event_visits enable row level security;
revoke all on public.ponpon_event_visits from public,anon,authenticated;
grant insert on public.ponpon_event_visits to authenticated;
drop policy if exists ponpon_event_visit_insert on public.ponpon_event_visits;
create policy ponpon_event_visit_insert on public.ponpon_event_visits for insert to authenticated with check(visitor_id=(select auth.uid()) and exists(select 1 from public.ponpon_rooms r where r.user_id=room_id and r.published));
create table if not exists public.ponpon_event_progress (
 event_id text primary key check(event_id in ('catch','chat','visit','vote')),
 total bigint not null default 0 check(total>=0)
);
alter table public.ponpon_event_progress enable row level security;
revoke all on public.ponpon_event_progress from public,anon,authenticated;
create or replace function public.ponpon_event_totals()
returns table(event_id text,total bigint) language plpgsql security definer set search_path='' as $$
begin
 insert into public.ponpon_event_progress as p(event_id,total)
 select t.id,t.n from (
 select 'catch'::text id, coalesce(sum(case when x.val #>> '{}' ~ '^[0-9]{1,9}$' then least((x.val #>> '{}')::bigint,100000) else 0 end),0)::bigint n from public.ponpon_saves s cross join lateral jsonb_array_elements(case when jsonb_typeof(s.payload->'ponpon-catcher.collection.v1')='array' then s.payload->'ponpon-catcher.collection.v1' else '[]'::jsonb end) x(val)
 union all select 'chat',coalesce(sum(case when x.val #>> '{}' ~ '^[0-9]{1,9}$' then least((x.val #>> '{}')::bigint,50) else 0 end),0)::bigint from public.ponpon_saves s cross join lateral jsonb_array_elements(case when jsonb_typeof(s.payload->'ponpon-catcher.bond.v1')='array' then s.payload->'ponpon-catcher.bond.v1' else '[]'::jsonb end) x(val)
 union all select 'visit',count(*) from public.ponpon_event_visits
 union all select 'vote',count(*) from public.ponpon_votes
 ) t on conflict on constraint ponpon_event_progress_pkey do update set total=greatest(p.total,excluded.total);
 return query select p.event_id,p.total from public.ponpon_event_progress p;
end; $$;
revoke all on function public.ponpon_event_totals() from public;
grant execute on function public.ponpon_event_totals() to anon,authenticated;
commit;
