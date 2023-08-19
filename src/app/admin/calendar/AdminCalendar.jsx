"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
);

export default function AdminCalendar() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const dateParam = date.toISOString().slice(0, 10);

    getAppointments(dateParam).then((data) => {
      setAppointments(data);
    });
  }, [date]);

  return (
    <>
      <Calendar className={"mx-auto rounded"} onChange={setDate} value={date} />
      <p className="text-center text-white">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
      <div className={"text-white"}>Appointments scheduled this day:</div>
      <div className="appointments text-white">
        {appointments.length !== 0 ? (
          <>
            <div>
              {appointments.map((appointment) => (
                <div key={appointment.id}>
                  <div className="appointment">
                    <div className="appointment__name">
                      {appointment.first_name} {appointment.last_name}
                    </div>
                    <div className="appointment__time">
                      {appointment.appointment_time}
                    </div>
                  </div>
                  <button
                    onClick={() => removeAppointment(appointment.id)}
                    className="bg-red-700 rounded px-2"
                  >
                    Remove Appointment
                  </button>
                </div>
              ))}
            </div>
            <div></div>
          </>
        ) : (
          <div>
            <p>No appointments scheduled for this day.</p>
          </div>
        )}
      </div>
    </>
  );
}

async function getAppointments(date) {
  const { data, error } = await supabase
    .from("calendar")
    .select()
    .eq("appointment_date", date);

  return data;
}

async function removeAppointment(id) {
  await supabase.from("calendar").delete().eq("id", id);
}
