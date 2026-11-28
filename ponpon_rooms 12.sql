begin;
create table if not exists public.ponpon_rooms (
 user_id uuid primary key references auth.users(id) on delete cascade,
 title text not null check (title in ('ポンポンのお部屋','のんびりハウス','秘密基地','お昼寝ルーム','虹のお部屋','仲間の集い')),
 layout jsonb not null check (jsonb_typeof(layout)='object' and octet_length(layout::text)<=4096),
 published boolean not null default false
);
create table if not exists public.ponpon_room_hearts (
 visitor_id uuid references auth.users(id) on delete cascade,
 room_id uuid references public.ponpon_rooms(user_id) on delete cascade,
 primary key(visitor_id,room_id), check(visitor_id<>room_id)
);
alter table public.ponpon_rooms enable row level security;
alter table public.ponpon_room_hearts enable row level security;
revoke all on public.ponpon_rooms,public.ponpon_room_hearts from public,anon,authenticated;
grant select on public.ponpon_rooms to anon,authenticated;
grant insert,update on public.ponpon_rooms to authenticated;
grant select,insert,delete on public.ponpon_room_hearts to authenticated;
drop policy if exists ponpon_rooms_read on public.ponpon_rooms;
create policy ponpon_rooms_read on public.ponpon_rooms for select using (published or user_id=(select auth.uid()));
drop policy if exists ponpon_rooms_insert on public.ponpon_rooms;
create policy ponpon_rooms_insert on public.ponpon_rooms for insert to authenticated with check(user_id=(select auth.uid()));
drop policy if exists ponpon_rooms_update on public.ponpon_rooms;
create policy ponpon_rooms_update on public.ponpon_rooms for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
drop policy if exists ponpon_hearts_read on public.ponpon_room_hearts;
create policy ponpon_hearts_read on public.ponpon_room_hearts for select to authenticated using(visitor_id=(select auth.uid()));
drop policy if exists ponpon_hearts_insert on public.ponpon_room_hearts;
create policy ponpon_hearts_insert on public.ponpon_room_hearts for insert to authenticated with check(visitor_id=(select auth.uid()) and exists(select 1 from public.ponpon_rooms r where r.user_id=room_id and r.published));
drop policy if exists ponpon_hearts_delete on public.ponpon_room_hearts;
create policy ponpon_hearts_delete on public.ponpon_room_hearts for delete to authenticated using(visitor_id=(select auth.uid()));
commit;
