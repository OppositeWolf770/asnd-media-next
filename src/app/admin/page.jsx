import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignOut from "@/src/components/SignOut";
import Link from "next/link";
import AdminLayout from "@/src/app/admin/AdminLayout";
import Admin from "@/src/app/admin/Admin";

export default async function Page() {
  return (
    <>
      <AdminLayout>
        <Admin />
      </AdminLayout>
    </>
  );
}
