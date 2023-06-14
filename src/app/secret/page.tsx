import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT",
};
export default function SecretPage() {
  return (
    <main>
      <h1>Secret Area</h1>
      <p>about.</p>
    </main>
  );
}
