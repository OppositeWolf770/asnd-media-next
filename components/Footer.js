import Link from "next/link";

export default function Footer() {
    return (
        <>
            <nav className={"footer"}>
                <Link href={"/about"}>About Us</Link>
                <Link href={"/packages"}>Boost Packages</Link>
                <Link href={"/contact"}>Contact Us</Link>
            </nav>
        </>
    )
}