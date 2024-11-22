"use client";

// components

import dynamic from 'next/dynamic';

const PhaseThree = dynamic(() => import('./phasethree.mdx'))

export default function Pearson() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden">
      <PhaseThree />
    </main>
  );
}