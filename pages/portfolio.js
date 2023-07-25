import Head from "next/head";
import Slideshow from "@/components/pages/Portfolio/Slideshow"
import { slides } from "@/components/data/slides"
import styles from 'styles/pages/portfolio.module.sass'

export default function Portfolio() {

    async function handleClick() {
        const response = await fetch('https://localhost:3000/api/mongodb')
        const data = await response.json()

        console.log(data)
    }

    return (
        <>
            <Head>
                <title>ASND Media - Portfolio</title>
            </Head>
            <div className={`contentBox ${styles.content}`}>Some Examples of our Work</div>

            {slides.map((slide) => (
                <>
                    <div className={`${styles.header} ${slide.style}`} key={slide.id}>
                        {slide.header}
                    </div>
                    <Slideshow slides={slide.slides} />
                </>
            ))}

            <button onClick={handleClick}>Test Function</button>
        </>
    )
}