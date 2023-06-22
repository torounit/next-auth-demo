"use client";
import { KeyIcon } from '@heroicons/react/20/solid';
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
      <button
        onClick={() => signIn("auth0")}
        type="button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <KeyIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
        Sign in
      </button>
    </>
  );
}
