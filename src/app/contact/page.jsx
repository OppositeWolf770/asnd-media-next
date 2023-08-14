import styles from "./contact.module.scss";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "ASND Media - Contact Us",
};

export default function Contact() {
  return (
    <>
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
