"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I started my programming journey with a focus on{" "}
        <span className="font-medium">UI/UX design. </span>Over time, my passion
        for creating dynamic websites and solving challenges led me to
        specialize in frontend development. I graduated from a coding bootcamp
        and currently work as a{" "}
        <span className="font-medium">Frontend Developer</span>.{" "}
        <span className="italic"> My core stack includes</span>{" "}
        <span className="underline">React, JavaScript, and Next.JS,</span> and{" "}
        {"I'm well-versed in"}{" "}
        <span className="font-medium">TypeScript and Redux.</span> Always eager
        to explore new technologies, I am actively seeking a full-time position
        as a frontend developer.
      </p>
      <p>
        <span className="italic">Outside of coding,</span> I enjoy jogging,
        spending time outdoors, and cherishing moments with my family.{" "}
        <span className="font-medium">
          My curiosity extends beyond coding -{" "}
        </span>
        {"I'm currently delving into the world of"}{" "}
        <span className="font-medium">dessert cooking.</span>
      </p>
    </motion.section>
  );
}
