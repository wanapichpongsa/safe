"use client";
import { Input } from "@/components/ui/catalyst/input";
import Link from "next/link";

// Burning question with nav and footer: Can we use semantic div elements in components?
// When condensed below a certain w, input bugs

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row w-screen justify-center md:items-start bg-zinc-200 dark:bg-zinc-900 p-4 lg:p-8">
      <div className="flex flex-row justify-center md:justify-start md:flex-col w-full gap-x-6 p-4 lg:p-8 ml-auto" id="subscribe">
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-4xl font-bold md:mt-4">SAFE</h1>
          <h2 className="hidden md:block text-md lg:text-xl mt-4">STAY UP TO DATE</h2>
        </div>
        <Input className="h-auto w-36 md:w-44 md:mt-4 text-sm" type="email" placeholder="email" /> {/* UseState and callback fn later */}
      </div>
      <div className="grid grid-cols-3 md:gap-x-12 gap-y-4 md:p-8 mt-4 mb-8 justify-center" id="links">
        <h3 className="text-center md:text-left text-lg text-zinc-900 dark:text-zinc-300 text-bold">History</h3>
        <h3 className="text-center md:text-left text-lg text-zinc-900 dark:text-zinc-300 text-bold">Services</h3>
        <h3 className="text-center md:text-left text-lg text-zinc-900 dark:text-zinc-300 text-bold">Else</h3>
        {/* Really need to make a FCF for className inheritance*/}
        {/* No md:px-4 as it messes with text-align*/}
        {/* Text center when mobile */}
        <Link href="/" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline  dark:text-zinc-500 dark:hover:text-zinc-400">Home</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">About</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Blog</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Contact</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Investors</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Partners</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Jobs</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Terms of Service</Link>
        <Link href="" className="text-center md:text-left text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-500 dark:hover:text-zinc-400">Privacy Policy</Link>
      </div>
    </div>
  )
}