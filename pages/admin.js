import { useSession, signOut, signIn } from "next-auth/react";
import Layout from "@/components/Layout";
import AccessDenied from "@/components/accessDenied";

export default function Admin() {
    const {data: session} = useSession()

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }

    return <AccessDenied />

    // if (typeof window !== 'undefined' && loading) return null
    //
    // if (!session) { return <AccessDenied />}
    //
    // return (
    //     <>
    //         <h1>Protected Page</h1>
    //         <p><strong>Welcome {session.user.name}</strong></p>
    //     </>
    // )
}