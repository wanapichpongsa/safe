"use client";
import dynamic from 'next/dynamic';

const PhaseOne = dynamic(() => import('./phaseone.mdx'))

export default function PhaseOnePage() {
  return (
    <main className="flex flex-col overflow-x-hidden justify-center max-w-screen mx-auto">
      <PhaseOne />
    </main>
  )
}