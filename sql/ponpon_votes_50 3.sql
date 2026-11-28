-- Run once in Supabase SQL Editor before publishing 1.1.39.
begin;
alter table public.ponpon_votes drop constraint if exists ponpon_votes_monster_id_check;
alter table public.ponpon_votes add constraint ponpon_votes_monster_id_check check (monster_id between 0 and 49);
commit;
