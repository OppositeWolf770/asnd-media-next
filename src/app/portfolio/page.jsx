import Head from "next/head";
import Slideshow from "./Slideshow";

import styles from "./portfolio.module.scss";
import { supabase } from "@/src/app/page";

export const metadata = {
  title: "ASND Media - Portfolio",
};

export default async function Portfolio() {
  const { data: slides } = await supabase.from("slides").select().order("id");

  return (
    <>
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
