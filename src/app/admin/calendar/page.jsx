import styles from "./calendar.module.scss";

import AdminLayout from "@/src/app/admin/AdminLayout";
import Calendar from "react-calendar";
import AdminCalendar from "@/src/app/admin/calendar/AdminCalendar";

export default function Page() {
  return (
    <>
      <AdminLayout>
        <AdminCalendar />
      </AdminLayout>
    </>
  );
}
