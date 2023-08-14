import ImageSlider from './ImageSlider';

import styles from './slideshow.module.scss';

export default function Slideshow({ slides }) {
  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
