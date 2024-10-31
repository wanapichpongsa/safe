"use client";
import Link from "next/link";
// Discover, Pricing, Contact

// nillion uses: #0021f5
// Nillion uses trigger subheading
// We will create dropdown in this component
// l-container u-flex

export default function Navbar() {
  return (
    <div className="flex flex-col w-screen lg:flex-row justify-center lg:justify-between items-center bg-zinc-200 dark:bg-zinc-900 p-4 lg:p-8">
      <h3 className="text-3xl font-bold">SAFE</h3>
      <div className="flex justify-center items-center gap-12 mt-2 lg:mt-0 lg:mr-20">
        <Link href="/" className="text-xl text-zinc-500 hover:text-zinc-900">Discover</Link>
        <Link href="/" className="text-xl text-zinc-500 hover:text-zinc-900">Pricing</Link>
        <Link href="/" className="text-xl text-zinc-500 hover:text-zinc-900">Contact</Link>
      </div>
    </div>
  )
}