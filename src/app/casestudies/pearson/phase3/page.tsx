"use client";

// components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// How Pearson can WIN

//use <iframe for Lucid chart
const LucidChart = () => {
  // Dynamic loading

  return (
    <div className="w-[1200px] height-[600px] m-10 relative">
      <iframe 
      allowFullScreen 
      style={{ width: '1200px', height: '600px', border: '0', justifyContent: 'center'}}
      src="https://lucid.app/documents/embedded/c504c144-cc24-48f0-90d2-551b523725f0" 
      id="BBYmvWI5PFIn">
      </iframe>
    </div>
  )
}

export default function Pearson() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-5xl font-bold">Phase 3: Streamlining the customer value chain to blitzscale</h1>
      </div>
      <h2 className="text-3xl font-bold mt-10 justify-start">[Customer Journey Map]</h2>
      <LucidChart />
      <Footer />
    </div>
  );
}