"use client";

import clsx from 'clsx';
import Link from "next/link";
import Image from "next/image";
import Astronaut from "@/images/astronaut.jpg";
import Education from "@/images/education.jpg";
// import Pearson from "@/public/pearson.png";
import Tutor from "@/images/tutor.jpg";

// I need unique blog1, blog2, blog3 with property image, url/src(whatever link uses) and description

interface Blog {
  id: number;
  date: string;
  author?: string; // Damn it
  image: string;
  url: string;
  description: string;
}

const blogArray: Blog[] = [
  {
    id: 1,
    date: "24th October 2024",
    image: Astronaut.src,
    url: "/casestudies/pearson/phase1",
    description: "Pearson at risk of losing their main source of revenue"
  },
  {
    id: 2,
    date: "27th October 2024",
    image: Education.src,
    url: "/casestudies/pearson/phase2",
    description: "How a micro-learning app can 10x Pearson's competitive advantage"
  },
  {
    id: 3,
    date: "29th October 2024",
    image: Tutor.src,
    url: "/casestudies/pearson/phase3",
    description: "Our presentation"
  }
];

interface BlogsProps {
  className?: string;
}

const Blogs = ({className}: BlogsProps) => {
  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-3 gap-4', className)}>
      {blogArray.map((blog) => (
        <Link key={blog.id} href={blog.url}>
        <div className="flex flex-col items-center justify-center gap-y-4 p-4">
          <Image
          src={blog.image}
          alt={blog.id.toString()}
          width={300}
          height={300}
          />
          <p className="text-sm text-gray-500">{blog.date}</p>
          <p className="text-lg font-bold text-left text-wrap">{blog.description}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Blogs;