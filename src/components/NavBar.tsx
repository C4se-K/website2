"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-8 z-50">
      <Link
        href="/bio"
        className={`h-10 w-10 rounded-full ${
          pathname === "/bio" ? "bg-white" : "bg-neutral-500"
        }`}
      />

      <Link
        href="/projects"
        className={`h-10 w-10 rounded-full ${
          pathname === "/projects" ? "bg-white" : "bg-neutral-500"
        }`}
      />

      <Link
        href="/canvas"
        className={`h-10 w-10 rounded-full ${
          pathname === "/canvas" ? "bg-white" : "bg-neutral-700"
        }`}
      />
    </div>
  );
}
