import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "For Portfolio",
  description: "A webapp for portfolio I must finish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
