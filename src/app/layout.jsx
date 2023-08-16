import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import AuthProvider from "@/src/components/AuthProvider";

import Navbar from "@/src/components/Layout/Navbar";
import Footer from "@/src/components/Layout/Footer";

import "src/styles/globals.scss";
import styles from "@/src/styles/Layout/navbar.module.scss";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
        <header>
          <a href="#main" className={styles.skip}>
            Skip to main content
          </a>
          <Navbar />
        </header>
        <main id={"main"}>
          <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
