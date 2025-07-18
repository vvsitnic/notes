"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 p-3 xl:px-10 w-full bg-white shadow-sm z-50 flex justify-between">
      <div className="flex items-center gap-2">
        <Link
          href="/profile/"
          className={
            pathname.startsWith("/profile")
              ? "font-semibold"
              : "hover:underline"
          }
        >
          Profile
        </Link>
        <span>|</span>
        <Link
          href="/"
          className={
            pathname === "/" || pathname.startsWith("/note")
              ? "font-semibold"
              : "hover:underline"
          }
        >
          Notes
        </Link>
      </div>
      <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-lg inline-block text-sm text-gray-800 cursor-pointer">
        New Note
      </button>
    </header>
  );
}
