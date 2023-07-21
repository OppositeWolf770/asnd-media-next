import { useState, CSSProperties } from "react"

import styles from '@/styles/components/Portfolio/imageSlider.module.sass'

export default function ImageSlider({ slides }){
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }


    if (slides.length === 1) {
        return (
            <div style={{
                height: '100%',
                position: 'relative'
            }} className={styles.sliderStyles}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${slides[currentIndex].url})`,
                }}>
                </div>
            </div>
        )
    }

    return (
        <div style={{
            height: '100%',
            position: 'relative'
        }} className={styles.sliderStyles}>
            <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goToPrevious}>←</div>
            <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={goToNext}>→</div>
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${slides[currentIndex].url})`,
            }}></div>
        </div>
    )
}