"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function Page() {
  const { data, error } = await supabase.storage.listBuckets();
  console.log(data);

  return (
    <>
      {/*{data.map((bucket) =>*/}
      {/*  // <div>{bucket.created_at}</div>*/}
      {/*  console.log(bucket)*/}
      {/*)}*/}
      <button>Create Bucket</button>
      <div>
        {data ? <div>Data is not null.</div> : <div>Data is null.</div>}
      </div>
    </>
  );
}
