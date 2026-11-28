begin;
create table if not exists public.ponpon_saves (
 user_id uuid primary key references auth.users(id) on delete cascade,
 payload jsonb not null check (jsonb_typeof(payload) = 'object' and octet_length(payload::text) <= 65536),
 revision bigint not null default 1 check (revision > 0)
);
alter table public.ponpon_saves enable row level security;
revoke all on public.ponpon_saves from anon, authenticated;
grant select, insert, update on public.ponpon_saves to authenticated;
drop policy if exists ponpon_read_own on public.ponpon_saves;
create policy ponpon_read_own on public.ponpon_saves for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists ponpon_insert_own on public.ponpon_saves;
create policy ponpon_insert_own on public.ponpon_saves for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists ponpon_update_own on public.ponpon_saves;
create policy ponpon_update_own on public.ponpon_saves for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
commit;
