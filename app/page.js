"use client";
import React from "react";
import {HeroParallax} from "../components/ui/HeroParallax";
import { motion } from "framer-motion";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import  Footer  from "../components/ui/footer_custom";

const products = [
  {
    title: "Mountains",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "New York",
    link: "https://google.so",
    thumbnail:
      "https://images.unsplash.com/photo-1734700920704-1e8000437a00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Flower",
    link: "https://google.com",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669865742415-596c9a489d77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },

  {
    title: "River",
    link: "https://google.org",
    thumbnail:
      "https://images.unsplash.com/photo-1742845918430-c6093f93f740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Flower",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1740652646168-0d1557a6e8c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pixel Perfect",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1743653537429-a94889a6fd47?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "Albama",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mountain UI",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mountains",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1741986947217-d1a0ecc39149?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "New York",
    link: "https://google.so",
    thumbnail:
      "https://images.unsplash.com/photo-1734700920704-1e8000437a00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Flower",
    link: "https://google.com",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1669865742415-596c9a489d77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  },

  {
    title: "River",
    link: "https://google.org",
    thumbnail:
      "https://images.unsplash.com/photo-1742845918430-c6093f93f740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Flower",
    link: "https://google.com",
    thumbnail:
      "https://images.unsplash.com/photo-1740652646168-0d1557a6e8c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
]


const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};



const testimonials = [
  {
    quote:
      "Good Id card genertaor. I like the way it works. It is easy to use and has a lot of features.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
    "Good Id card genertaor. I like the way it works. It is easy to use and has a lot of features.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
    "Good Id card genertaor. I like the way it works. It is easy to use and has a lot of features.",

    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
    "Good Id card genertaor. I like the way it works. It is easy to use and has a lot of features.",

    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
    "Good Id card genertaor. I like the way it works. It is easy to use and has a lot of features.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
   <>
    <HeroParallax products={products} />



    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 m-8">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This is a demo card"
        description="I don't know what to write here. I just want to see how it looks."
      />
 
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This is a demo card"
        description="I don't know what to write here. I just want to see how it looks."
      />
 
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This is a demo card"
        description="I don't know what to write here. I just want to see how it looks."
      />
 
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This is a demo card"
        description="I don't know what to write here. I just want to see how it looks."
      />
 
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This is a demo card"
        description="I don't know what to write here. I just want to see how it looks."
      />
    </ul>


    <AnimatedTestimonials testimonials={testimonials} />


    <Footer/>
   </>
  );
}










