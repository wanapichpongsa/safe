"use client";
import Link from "next/link";
// Discover, Pricing, Contact

// nillion uses: #0021f5
// Nillion uses trigger subheading
// We will create dropdown in this component
// l-container u-flex

const links = () => {
  return (
    <Link href="/" className="hover:underline">
       Discover
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-screen lg:flex-row justify-center lg:justify-between items-center bg-zinc-200 dark:bg-zinc-900 p-4 lg:p-8">
      <h3 className="text-3xl font-bold">SAFE</h3>
      <div className="flex justify-center items-center gap-12 mt-2 lg:mt-0 lg:mr-20">
        <Link href="/" className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 hover:underline">Discover</Link>
        <Link href="/" className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 hover:underline">Pricing</Link>
        <Link href="/" className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 hover:underline">Contact</Link>
      </div>
    </header>
  )
}