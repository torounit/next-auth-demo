import type { Metadata } from "next";

import LoginLogout from '@/components/LoginLogout';
import React from 'react';
import Count from '@/components/Count';

export const metadata: Metadata = {
  title: "HOME",
};

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <LoginLogout />
      <Count />
    </main>
  );
}
