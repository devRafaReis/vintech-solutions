import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import Construct from "@/components/Construct";

export const metadata: Metadata = {
  title: "VinTech Solutions",
  description: "VinTech Solutions is a software development company that provides custom software development, web development, mobile app development, and digital marketing services.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Construct />
      {/* <Hero /> */}
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Contact /> */}
    </>
  );
}
