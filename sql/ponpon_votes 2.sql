begin;
create table if not exists public.ponpon_votes (
 user_id uuid primary key references auth.users(id) on delete cascade,
 monster_id integer not null check (monster_id between 0 and 9)
);
alter table public.ponpon_votes enable row level security;
revoke all on public.ponpon_votes from public, anon, authenticated;
grant select, insert, update on public.ponpon_votes to authenticated;
drop policy if exists ponpon_vote_own on public.ponpon_votes;
create policy ponpon_vote_own on public.ponpon_votes for all to authenticated
 using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create or replace function public.ponpon_vote_totals()
returns table(monster_id integer, votes bigint)
language sql stable security definer set search_path = ''
as $$ select v.monster_id, count(*) from public.ponpon_votes v group by v.monster_id $$;
revoke all on function public.ponpon_vote_totals() from public;
grant execute on function public.ponpon_vote_totals() to anon, authenticated;
commit;
