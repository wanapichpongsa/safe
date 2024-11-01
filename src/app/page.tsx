"use client";

// Next.js
import Link from 'next/link';
// Components
import Carousels from '@/components/carousel';
import Blogs from '@/components/bloglink';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Theme: Squares, Cubes, Equilibrium
// Retro, Tech feel
// Y2K...
// Glitch...

// Use Helvetica Neue
// X Curve. Law of exponents. (If your exponent is higher than your competitors, they'll never catch up to you)
export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden items-center justify-center w-full">
      <Navbar />
      <div className="" id="hero">
        <div className="w-full h-auto" id="headline">
          {/* Cycle: 'SAFE Creates Markets, Streamlines UX, Increase Retention'*/}
          <div className="flex flex-col justify-center items-center p-8 mt-28">
            <h1 className="text-4xl md:text-6xl font-bold">10x Returns</h1>
            {/* <h1 className="text-7xl font-bold">Consultants that actually BUILD</h1> {/* Catchy line where consultants actually are engineers*/}
            {/* Exponential returns Transform UX, Increase Market Share, Latest Technology*/}
            <div className="flex mt-4" id="link">
              <Link href="#blog" className="transition-all duration-300 ease-in-out hover:scale-110">CASE STUDIES</Link>
              {/* make Live updating link */}
              {/* Beautiful search bar? */}
            </div>
          </div>
        </div>
        {/* Slider carousel + fade-up animation if possible (stagger-index-i)*/}
        <div className="w-screen h-auto justify-center md:justify-start" id="hero-image">
          <Carousels />
        </div>
      </div>
      {/* Input later */}
      
      <div className="flex flex-col md:items-start justify-center p-4" id="blog">
        <h2 className="text-6xl text-center md:text-left font-bold mt-20 ml-4 lg:ml-24">Highlights</h2>
        <Blogs className="my-10" />
      </div>
      <Footer />
    </main>
  );
}

/*
{ Distinct seperation }
  { [How it\n  works]}
      <div className="w-screen h-auto mt-20 justify-center items-center p-4" id="howitworks">
      { Keep left may be good }
        <h2 className="text-7xl font-bold justify-center ml-8">[How it<br/>&nbsp;&nbsp;&nbsp;&nbsp;works]</h2> { Should use memory padding}
      </div>


      <div className="flex mt-20 items-center justify-center" id="about">
          <h2 className="text-6xl font-bold">Meet team SAFE</h2>
            { Squares has to be squares}
            {Philipp 4x Consulting hackathon winner}
      </div>
*/