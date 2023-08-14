import styles from "./about.module.scss";
import Image from "next/image";

export const metadata = {
  title: "ASND Media - About",
};

export default function About() {
  return (
    <>
      <div className={`${styles.header} contentBox`}>About Us</div>
      <div className={`${styles.content} contentBox`}>
        <div className={`${styles.subheader} contentBox`}>
          Professional. Experienced. Approachable.
        </div>
        <p className={styles.text}>
          Founded in 2022, ASND Media is a digital marketing company created to
          support local business through advancing technology. Our priority is
          to further your business with media management to reach new heights.
        </p>
        <p className={styles.text}>
          At ASND Media, we assist you in reaching a larger audience through
          business profile remodeling. Our services include: Professional
          Photography, Media Management Setup, and Exclusive Profile Graphics
          with Resources.
        </p>
        <p className={styles.text}>
          Our goal to make a difference in our community begins with two people.
          Local businesses deserve the opportunity to boost exposure through
          advancing technology. Working together, we can help you reach new
          heights.
        </p>
      </div>

      <div className={styles.profiles}>
        <Image
          className={styles.profile}
          src="/images/bee_assets/bee_jake.jpg"
          alt=""
          width={656}
          height={436}
        ></Image>
        <Image
          className={styles.profile}
          src="/images/bee_assets/bee_gabe.jpg"
          alt=""
          width={656}
          height={436}
        ></Image>
      </div>
    </>
  );
}
