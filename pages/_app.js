import '@/styles/globals.sass'
import Layout from "@/components/Layout";
import {SessionProvider} from "next-auth/react";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";

export default function App({ Component, pageProps: { session, ...pageProps} }) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}
