import Link from "next/link";
import Image from "next/image";

import styles from '../styles/components/navbar.module.sass'


export default function Navbar() {
    return (
        <>
            <header>
                <a href="#main" className={styles.skip}>Skip to main content</a>
            </header>

            <nav className={styles.topnav}>
                <Link href={"/"}>
                    <Image
                        className={styles.ASNDlogo}
                        src={"/images/ASND-logo.png"}
                        alt={"ASND Media Logo"}
                        width={350}
                        height={200}
                    />
                </Link>
                <div className={styles.links}>
                    <Link href={"/about"}>About Us</Link>
                    <Link href={"/packages"}>Boost Packages</Link>
                    <Link href={"/contact"}>Contact Us</Link>
                    <Link href={"/portfolio"}>Portfolio</Link>
                </div>
            </nav>
        </>
    )
}