import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/components/navbar.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <a href="#main" className={styles.skip}>
          Skip to main content
        </a>
        <Navbar />
      </header>
      <main id="main">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
