"use client"; // but check server-side like accessing window object
// ISR: Incremental Static Regeneration (serer side though)
// <Image /> optimization
// using embla-carousel-react

// Shadcn/ui
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Embla Autoplay
import Autoplay from "embla-carousel-autoplay"

// Next.js
import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image'
import jobsWozniak from '@/images/jobs_wozniak.jpg'
import paypalMafia from '@/images/paypal_mafia.webp'
import elonMusk from '@/images/elon_musk.png'

interface CarouselSlide {
  image: {
    src: string;
    alt: string;
  };
  blockquote: {
    className?: string;
    quote: string;
    quoteclassName?: string;
    author: string;
    authorTitle?: string;
    authorclassName?: string;
  }
}

const carouselSlides: CarouselSlide[] = [
  {
    image: {
      src: jobsWozniak.src,
      alt: "apple",
    },
    blockquote: {
      quote: "Real artists ship.",
      author: "Steve Jobs"
    }
  },
  {
    image: {
      src: paypalMafia.src,
      alt: "paypal mafia",
    },
    blockquote: {
      quote: "The next Bill Gates will not build an operating system. The next Larry Page or Sergey Brin won't make a search engine. If you are copying these guys, you aren't learning from them.",
      quoteclassName: "text-md lg:text-xl",
      author: "Peter Thiel",
      authorTitle: "Paypal co-founder & author of Zero to One",
      authorclassName: "text-sm lg:text-md"
    }
  },
  {
    image: {
      src: elonMusk.src,
      alt: "paypal mafia",
    },
    blockquote: {
      quote: "When something is important enough, you do it. Even if the odds aren't in your favor.",
      quoteclassName: "text-xl lg:text-2xl",
      author: "Elon Musk"
    }
  }
];

export default function Carousels() {
  // instantiate Embla Autoplay API as ref hook plugin
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  )

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {carouselSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="flex[0_0_100%] mx-4 md:mx-8">
              <div className="lg:flex flex-1 justify-center">
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  width={900}
                  height={600}
                  priority
                  className="w-full lg:max-w-4xl md:min-w-44 h-auto"
                />
                <blockquote className={clsx("text-center my-4 lg:mx-8 lg:mt-16", slide.blockquote.className)}>
                  <h2 className={clsx("text-2xl lg:text-4xl lg:mt-12 font-bold", slide.blockquote.quoteclassName)}>{`"${slide.blockquote.quote}"`}</h2>
                  <br />
                  <p className={clsx("text-lg text-zinc-500 mb-8", slide.blockquote.authorclassName)}>
                    - {slide.blockquote.author}
                    {slide.blockquote.authorTitle && `, ${slide.blockquote.authorTitle}`}
                  </p>
                </blockquote>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}