"use client"; // but check server-side like accessing window object
// ISR: Incremental Static Regeneration (serer side though)
// <Image /> optimization
// using embla-carousel-react

// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'
// Next.js
import Image from 'next/image'
import jobsWozniak from '@/images/jobs_wozniak.jpg'
import paypalMafia from '@/images/paypal_mafia.webp'
import elonMusk from '@/images/elon_musk.png'

/* const with images we want to cycle through
1. First image static stagger-index-i or fade-up
2. First image animate go to left
3. image[i+1] go to left to take screen
^ Promise with delay...

Lesson to be learnt: ref hook as prop to DOM element

Can't center author because quote has different length
img and quote conflict (bad when mobile first)
*/

// HTML is annoying to refactor so...
// interface Carousel {}
// const carouselArray: Carousel[] = {}

export default function Carousels() {
  // embla hook with options (rotate through divs?)
  const [emblaRef] = useEmblaCarousel({
    loop: true, 
    align: 'center', 
    skipSnaps: false,
  })
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex[0_0_100%]">
        {/* slide 1, flex shrink grow 1 */}
        {/* 900 x 600 */}
        <div className="sm:flex flex-1" id="slide1">
          <Image
          src={jobsWozniak.src} 
          alt="apple"
          width={900}
          height={600}
          priority
          className="min-w-44 h-auto ml-14"
          />
          <blockquote className="text-center mx-auto mt-16" id="blockquote">
            <h2 className="text-4xl mt-12 font-bold">"Real artists ship."</h2><br></br>
            <p className="text-2xl text-zinc-500">- Steve Jobs</p>
          </blockquote>
        </div>
      </div>
        {/* Slide 2 */}
      <div className="flex[0_0_100%]">
        <div className="sm:flex flex-1" id="slide2">
          {/* 700 x 525 */}
          <Image
          src={paypalMafia.src}
          alt="paypal mafia"
          width={900}
          height={600}
          priority
          className="min-w-44 h-auto ml-14"
          />
          <blockquote className="mr-8 ml-12 mt-16" id="blockquote">
            {/* */}
            <h2 className="text-xl mt-12 font-bold text-left">
              "The next Bill Gates will not build an operating system. 
               The next Larry Page or Sergey Brin won't make a search engine.
               If you are copying these guys, you aren't learning from them."
              </h2><br></br>
            <p className="text-2xl text-zinc-500">- Peter Thiel, Paypal co-founder & author of Zero to One</p>
          </blockquote>
        </div>
        </div>
        <div className="flex-[0_0_100%]">
          <div className="sm:flex flex-1" id="slide3">
            {/* 700 x 525 */}
            <Image
            src={elonMusk.src}
            alt="paypal mafia"
            width={900}
            height={600}
            priority
            className="min-w-44 h-auto ml-14"
            />
            <blockquote className="mr-8 ml-12 mt-16" id="blockquote">
              <h2 className="text-xl mt-12 font-bold text-left">
                "When something is important enough, you do it. 
                Even if the odds aren't in your favor."
              </h2><br></br>
              <p className="text-2xl text-zinc-500">- Elon Musk</p>
            </blockquote>
          </div>
        </div>
    </div>
  )
}

/*
Creative monopoly means new products that benefit
<br></br> everybody
and sustainable profits for the creator. 
<br></br> Competition means no profits for anybody, no 
meaningful differentiation, and a struggle for survival."

*/