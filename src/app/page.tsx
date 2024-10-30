"use client";

// Next.js
import Link from 'next/link';
import Carousel from '@/components/carousel';

// Theme: Squares, Cubes, Equilibrium
// Retro, Tech feel
// Y2K...
// Glitch...

// Use Helvetica Neue
// X Curve. Law of exponents. (If your exponent is higher than your competitors, they'll never catch up to you)
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <div className="" id="hero">
        <div className="w-screen h-auto" id="headline"> 
          {/* Cycle: 'SAFE Creates Markets, Streamlines UX, Increase Retention'*/}
          <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-6xl font-bold mt-10">10x Returns</h1>
            {/* <h1 className="text-7xl font-bold">Consultants that actually BUILD</h1> {/* Catchy line where consultants actually are engineers*/}
            {/* Exponential returns Transform UX, Increase Market Share, Latest Technology*/}
            <div className="flex mt-4" id="link">
              <Link href="/casestudies(s)/pearson" className="transition-all duration-300 ease-in-out hover:scale-110">CASE STUDIES</Link>
              {/* make Live updating link */}
              {/* Beautiful search bar? */}
            </div>
          </div>
        </div>
        {/* Slider carousel + fade-up animation if possible (stagger-index-i)*/}
        <div className="w-screen h-auto" id="hero-image">
          <Carousel />
        </div>
      </div>
      {/* Distinct seperation */}
      {/* [How it\n  works] */}
      <div className="w-screen h-auto justify-center items-center p-4" id="howitworks">
      {/* Keep left may be good */}
        <h2 className="text-7xl font-bold justify-center ml-8">[How it<br/>&nbsp;&nbsp;&nbsp;&nbsp;works]</h2> {/* Should use memory padding */}
      </div>


      <div className="flex mt-4 items-center justify-center" id="about">
          <h2 className="text-6xl font-bold">You're in SAFE hands</h2>
            {/* Squares has to be squares */}
            {/* Philipp 4x Consulting hackathon winner*/}
      </div>
          

    </main>
  );
}