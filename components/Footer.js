import Link from "next/link";

import styles from '../styles/components/footer.module.sass'

export default function Footer() {
    return (
        <>
            <nav className={styles.footer}>
                <Link href={"/about"}>About Us</Link>
                <Link href={"/packages"}>Boost Packages</Link>
                <Link href={"/contact"}>Contact Us</Link>
            </nav>
        </>
    )
}