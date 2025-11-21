"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-8 z-50">
      <Link href="/bio" prefetch className="h-10 w-10 rounded-full bg-neutral-400"></Link>
      <Link href="/" prefetch className="h-10 w-10 rounded-full bg-neutral-400"></Link>
      <Link href="/canvas" className="h-10 w-10 rounded-full bg-neutral-400"></Link>
    </div>
  );
}
