"use client";

import clsx from 'clsx';
import Link from "next/link";
import Image from "next/image";
import Kid from "@/images/kid.jpg";
import Education from "@/images/education.jpg";
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
    image: Kid.src,
    url: "/casestudies/pearson/phase1",
    description: "Phase 1: Pearson is in trouble"
  },
  {
    id: 2,
    date: "27th October 2024",
    image: Education.src,
    url: "/casestudies/pearson/phase2",
    description: "Phase 2: What's saving Pearson?"
  },
  {
    id: 3,
    date: "29th October 2024",
    image: Tutor.src,
    url: "/casestudies/pearson/phase3",
    description: "Phase 3: This"
  }
];

interface BlogsProps {
  className?: string;
}

// We want faded animation...
const Blogs = ({className}: BlogsProps) => {
  return (
    <div className={clsx('grid grid-cols-1 lg:grid-cols-3 gap-4 w-screen', className)}>
      {blogArray.map((blog) => (
        
        <div key={blog.id} className="flex flex-col px-6 py-4 items-center">
          <Link href={blog.url}>
            <Image
            src={blog.image}
            alt={blog.id.toString()}
            width={300}
            height={300}
            />
          </Link>
          <div className="w-[300px] my-4 gap-y-4">
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="text-lg font-bold text-left text-wrap mt-4">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blogs;