import ImageSlider from "@/components/Portfolio/ImageSlider";

import styles from 'styles/components/Portfolio/slideshow.module.sass'

export default function Slideshow({slides}) {
    return (
        <div className={styles.slideshow}>
            <div className={styles.slide}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}