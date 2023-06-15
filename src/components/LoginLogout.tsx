"use client";
import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginLogout() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <>
        {session.user.email} <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn("auth0")}>Sign in</button>
    </>
  );
}
