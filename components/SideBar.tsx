"use client";

import Link from "next/link";

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
    <div className="shrink-0 w-3xs h-screen bg-white shadow-sm z-40 p-3 flex flex-col">
      <Link href="/">back</Link>
      <p>note 1</p>
      <p>note 2</p>
      <p>note 3</p>
    </div>
  );
}
