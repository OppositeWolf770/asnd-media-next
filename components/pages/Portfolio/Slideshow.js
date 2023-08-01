import ImageSlider from "@/components/pages/Portfolio/ImageSlider";

import styles from "@/styles/components/Portfolio/slideshow.module.scss";

export default function Slideshow({ slides }) {
  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
