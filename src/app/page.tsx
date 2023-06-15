import type { Metadata } from "next";

import LoginLogout from '@/components/LoginLogout';

export const metadata: Metadata = {
  title: "HOME",
};

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <LoginLogout />
    </main>
  );
}
