import { Inter } from 'next/font/google'
import Head from "next/head";
import styles from '../styles/pages/home.module.sass'
import Link from "next/link";
import Projects from "@/components/pages/Home/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>ASND Media - Home</title>
      </Head>

      <div className={`contentBox ${styles.content}`}>
        <div className={styles.header}><span>ASND</span> Your Business to New Heights.</div>
        <div className={styles.subheader}>With a wide variety of media options, find something that&apos;s right for you.</div>
        <Link href={"/packages"}><button className={styles.button}>Boost Packages</button></Link>
      </div>

      <Projects />
    </>
  )
}
