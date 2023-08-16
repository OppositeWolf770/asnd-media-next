import styles from "./home.module.scss";
import Link from "next/link";
import Projects from "./Projects";

export const metadata = {
  title: "ASND Media - Home",
};

export default function Home() {
  return (
    <>
      <div className={`contentBox ${styles.content}`}>
        <div className={styles.header}>
          <span>ASND</span> Your Business to New Heights.
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
