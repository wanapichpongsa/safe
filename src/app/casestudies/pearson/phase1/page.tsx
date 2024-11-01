"use client"
// SEARCH page
// bun build doesn't work with mdx
import dynamic from 'next/dynamic'
// dk how to import image into mdx so...
// import Mapify from '@/components/mapify.png'

const PhaseOne = dynamic(() => import('./phaseone.mdx'))

export default function PhaseOnePage() {
  return (
    <div className="container mx-4 md:mx-8">
      <PhaseOne />
    </div>
  )
}