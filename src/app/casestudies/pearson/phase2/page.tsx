"use client";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductMatrix from '@/components/productmatrix';
import ComparativeScoreChart from '@/components/comparativescoringchart';

export default function PhaseTwoPage() {
  return (
    <main className="flex flex-col overflow-x-hidden justify-center max-w-screen mx-auto">
      <Navbar />
      <h1 className="text-center text-4xl font-bold mt-40">What's saving Pearson?</h1>
      <ProductMatrix className="max-w-2xl mb-24" />
      <div className="flex justify-center mb-28">
        <ComparativeScoreChart/>
      </div>
      <Footer />
    </main>
  )
}