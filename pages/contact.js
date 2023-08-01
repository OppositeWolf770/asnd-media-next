import { useState } from "react";
import Head from "next/head";

import styles from "../styles/pages/contact.module.scss";
import ContactForm from "@/components/pages/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>ASND Media - Contact Us</title>
      </Head>

      <div className={styles.wrapper}>
        <div className={`contentBox ${styles.content}`}>
          <div className={styles.header}>Contact us.</div>
          <div className={styles.text}>asndmediacontact@gmail.com</div>
          {/*<div className="contact--content-text">Gabe Spencer - (501) 764-6114 (SMS Preferred)</div>*/}
          {/*<div className="contact--content-text">Jake Britton - (940) 230-6120 (SMS Preferred)</div>*/}
        </div>

        {/*<form className="contact--form" action="https://submit-form.com/XyCS6cZd" method="post">*/}

        <ContactForm />
      </div>
    </>
  );
}
