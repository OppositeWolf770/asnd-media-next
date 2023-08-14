import Head from "next/head";
import Slideshow from "./Slideshow";

import styles from "./portfolio.module.scss";

import { createClient } from "@supabase/supabase-js";

// export const getServerSideProps = async () => {
//   const res = await fetch('http://asnd-media.com/api/fetchSlides');
//   const data = await res.json();

//   const body = data.body;

//   return { props: { body } };
// };

export default async function Portfolio() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: slides } = await supabase.from("slides").select().order("id");

  return (
    <>
      <Head>
        <title>ASND Media - Portfolio</title>
      </Head>
      <div className={`contentBox ${styles.content}`}>
        Some Examples of our Work
      </div>
      <button></button>

      {slides.map((slide) =>
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
