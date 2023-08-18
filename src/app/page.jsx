import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import styles from "@/src/app/home/home.module.scss";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export default async function Index() {
  return (
    <>
      <div className={`contentBox ${styles.content}`}>
        <div className={styles.header}>
          <span className={"text-red-700"}>ASND</span> Your Business to New
          Heights.
        </div>
        <div className={styles.subheader}>
          With a wide variety of media options, find something that&apos;s right
          for you.
        </div>
        <Link href={"/packages"}>
          <button className={styles.button}>Boost Packages</button>
        </Link>
      </div>

      {/*<Projects />*/}
    </>
  );
}
