"use client";

import { EyeOff, Undo2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { useEffect } from "react";

export default function SideBar() {
  //   useEffect(() => {
  //     const onMouseMove = (e: MouseEvent) => {
  //       if (e.clientX === 0) {
  //         console.log(123);
  //       }
  //     };

  //     const event = document.addEventListener("mousemove", onMouseMove);

  //     return () => {
  //       document.removeEventListener("mousemove", onMouseMove);
  //     };
  //   }, []);

  return (
    <div className="shrink-0 w-3xs h-screen bg-white shadow-sm z-40 py-3 px-2 flex flex-col">
      <Link
        href="/"
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-300 px-3 py-1 rounded-lg mb-3 transition-colors"
      >
        <Undo2 className="inline-block size-5" />
        <p>Back</p>
      </Link>
      <div className="flex flex-col">
        <SideBarNavLink href="/note/1" name="note 1" />
        <SideBarNavLink href="/note/2" name="note 2" />
        <SideBarNavLink href="/note/3" name="note 3" />
      </div>
    </div>
  );
}

function SideBarNavLink({ href, name }: { href: string; name: string }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`relative group overflow-hidden hover:bg-gray-200 px-3 py-1 rounded-lg flex items-center gap-1 text-sm text-gray-800 hover:text-black cursor-pointer truncate ${
        isActive ? "bg-gray-100" : null
      }`}
    >
      {name}
      <button className="inline-block h-full px-3 rounded-lg absolute top-1/2 right-0 -translate-y-1/2 translate-x-full group-hover:translate-x-0 transition-transform hover:bg-gray-300 cursor-pointer">
        <EyeOff className="size-4" />
      </button>
    </Link>
  );
}
