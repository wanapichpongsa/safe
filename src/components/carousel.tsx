"use client"; // but check server-side like accessing window object
// ISR: Incremental Static Regeneration (serer side though)
// <Image /> optimization
// using embla-carousel-react

// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'
// Next.js
import Image from 'next/image'
import jobsWozniak from '@/images/jobs-wozniak.png'

/* const with images we want to cycle through
1. First image static stagger-index-i or fade-up
2. First image animate go to left
3. image[i+1] go to left to take screen
^ Promise with delay...

Lesson to be learnt: ref hook as prop to DOM element
*/

export default function Carousel() {
  // embla hook with options (rotate through divs?)
  const [emblaRef] = useEmblaCarousel({loop: true, align: 'center', skipSnaps: false})
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex[0_0_100%]">
        {/* slide 1, flex shrink grow 1 */}
        <div className="flex-1">
          <Image
          src={jobsWozniak.src}
          alt="apple"
          width={1000}
          height={1000}
          priority
          className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  )
}