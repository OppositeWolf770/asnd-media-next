'use client';

import { useState } from 'react';

import styles from './contact.module.scss';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [buttonMsg, setButtonMsg] = useState('Send');

  const [response, setResponse] = useState();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //
  //   try {
  //     const res = await fetch(".netlify/functions/submit", {
  //       method: "POST",
  //       body: JSON.stringify({ firstName, lastName, email, message }),
  //     }).then((res) => res.json());
  //     setResponse(res);
  //     setButtonMsg("Email Sent!");
  //   } catch (e) {
  //     setButtonMsg("Could not send email. Please contact them directly.");
  //   }
  //
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setMessage("");
  //
  //   setTimeout(function () {
  //     setButtonMsg("Send");
  //   }, 5000);
  // }

  return (
    <>
      <form
        className={styles.form}
        action="https://submit-form.com/XyCS6cZd"
        method="post"
      >
        <div className={`${styles.label} ${styles.nameLabel}`}>Name *</div>
        <div className={styles.nameboxes}>
          <div className={styles.name}>
            <input
              type="text"
              name="firstName"
              id=""
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
            {/* <div className="namelabel">First Name</div> */}
          </div>
          <div className={styles.name}>
            <input
              type="text"
              name="lastName"
              id=""
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
            {/* <div className="namelabel">Last Name</div> */}
          </div>
        </div>

        <div className={styles.label}>Email *</div>
        <input
          className={styles.emailBox}
          type="text"
          name="email"
          id=""
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <div className={styles.label}>Message *</div>
        <textarea
          id={styles.message}
          name="message"
          placeholder="Message"
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />

        <button className={styles.button} type="submit">
          {buttonMsg}
        </button>
      </form>
    </>
  );
}
