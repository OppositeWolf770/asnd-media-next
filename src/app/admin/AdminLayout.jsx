import Link from "next/link";
import SignOut from "@/src/components/SignOut";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/sign-in");
  }
  return (
    <>
      <nav>
        <Link href={"/admin"}>Admin</Link>
        <Link href={"/admin/calendar"}>Calendar</Link>
      </nav>
      {children}
      <SignOut />
    </>
  );
}
