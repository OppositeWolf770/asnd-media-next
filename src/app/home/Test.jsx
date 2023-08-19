"use client";

import { supabase } from "@/src/app/page";

async function removeAppointment(id) {
  const { data, error } = await supabase.from("calendar").delete().eq("id", id);

  return data;
}

export default function Test() {
  return (
    <>
      <button onClick={() => removeAppointment(5)}>Remove Appointment</button>
    </>
  );
}
