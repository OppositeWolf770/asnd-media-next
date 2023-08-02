import Head from "next/head";
import Slideshow from "@/components/pages/Portfolio/Slideshow";

import styles from "@/styles/pages/portfolio.module.scss";

export const getServerSideProps = async () => {
  const res = await fetch("http://asnd-media.com/api/fetchSlides");
  const data = await res.json();

  const body = data.body;

  return { props: { body } };
};

export default function Portfolio({ body }) {
  return (
    <>
      <Head>
        <title>ASND Media - Portfolio</title>
      </Head>
      <div className={`contentBox ${styles.content}`}>
        Some Examples of our Work
      </div>

      {body.map((slide) =>
        slide.id % 2 === 0 ? (
          <>
            <div className={`${styles.header} ${styles.headerRight}`}>
              {slide.header}
            </div>
            <Slideshow slides={slide.slides} />
          </>
        ) : (
          <>
            <div className={`${styles.header} ${styles.headerLeft}`}>
              {slide.header}
            </div>
            <Slideshow slides={slide.slides} />
          </>
        )
      )}
    </>
  );
}
