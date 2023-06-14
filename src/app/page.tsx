import type { Metadata } from "next";

import Login from '@/src/components/Login';

export const metadata: Metadata = {
  title: "HOME",
};

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Login />
    </main>
  );
}
