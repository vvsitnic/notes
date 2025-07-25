import SideBar from "@/components/SideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Some Note",
  description: "A webapp for portfolio I must finish | Some Note",
};

export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}
