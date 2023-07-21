import Head from "next/head";
import Slideshow from "@/components/Portfolio/Slideshow";

import styles from 'styles/pages/portfolio.module.sass'

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>ASND Media - Portfolio</title>
            </Head>
            <div className={`contentBox ${styles.content}`}>Some Examples of our Work</div>

            <div className={`${styles.header} ${styles.headerLeft}`}>Bee Placeholder</div>
            <Slideshow slides={[
                { url: "/images/bee_assets/bees.jpg"},
                { url: "/images/bee_assets/bees_2.jpg"},
                { url: "/images/bee_assets/bees_honey.jpg"},
            ]} />

            <div className={`${styles.header} ${styles.headerRight}`}>Red Barn</div>
            <Slideshow slides={[
                { url: "/images/red-barn.jpg"}
            ]} />

            <div className={`${styles.header} ${styles.headerLeft}`}>Efird Leather</div>
            <Slideshow slides={[
                { url: "/images/efird-leather.JPG"}
            ]} />

            <div className={`${styles.header} ${styles.headerRight}`}>Spirited Recreations</div>
            <Slideshow slides={[
                { url: "/images/Spirited-Recreations.jpg"}
            ]} />

            <div className={`${styles.header} ${styles.headerLeft}`}>2 Crafty Sisters</div>
            <Slideshow slides={[
                { url: "/images/2-Crafty-Sisters.jpg"}
            ]} />
        </>
    )
}