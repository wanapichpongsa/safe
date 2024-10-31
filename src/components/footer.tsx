"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Burning question with nav and footer: Can we use semantic div elements in components?
// When condensed below a certain w, input bugs

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-screen justify-center items-start bg-zinc-200 dark:bg-zinc-900 p-4 lg:p-8">
      <div className="flex flex-row lg:flex-col w-full justify-between gap-y-4 p-4 lg:p-8" id="subscribe">
        <h1 className="text-2xl lg:text-4xl font-bold">SAFE</h1>
        <h2 className="text-md lg:text-xl">STAY UP TO DATE</h2>
        <Input className="w-48" type="email" placeholder="Enter your email" /> {/* UseState and callback fn later */}
      </div>
      <div className="grid grid-cols-3 w-full gap-x-4 gap-y-4 p-4 lg:p-8" id="links">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Investors</Link>
        <Link href="/">Partners</Link>
        <Link href="/">Jobs</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </div>
  )
}