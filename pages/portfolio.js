import Head from "next/head";
import Slideshow from "@/components/pages/Portfolio/Slideshow"
import { slides } from "@/components/data/slides"
import styles from 'styles/pages/portfolio.module.sass'

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>ASND Media - Portfolio</title>
            </Head>
            <div className={`contentBox ${styles.content}`}>Some Examples of our Work</div>

            {slides.map((slide) => (
                <>
                    <div className={`${styles.header} ${slide.style}`}>
                        {slide.header}
                    </div>
                    <Slideshow slides={slide.slides}/>
                </>
            ))}
        </>
    )
}