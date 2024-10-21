import Image from "next/image";
import React from "react";
import mune from "../../../public/munezero.jpeg";
import Line from "../ui/Line";
import AnimatedButton from "../cards/AnimatedButton";
import {ArrowDownToLine, Send} from "lucide-react"
import { useRouter } from "next/router";
import Link from "next/link";

function Hero() {
  const router = useRouter()
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-16 relative"
      id="home"
    >
      <div className="flex flex-col items-center gap-5 md:max-w-6xl pt-20 px-3">
        <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center md:mb-5">
          <div className="w-36 h-36 rounded-full border overflow-hidden">
            <Image src={mune} alt="owner" />
          </div>
        </div>
        <div className="text-xl md:text-4xl text-center w-full leading-loose tracking-wider md:mb-5 flex flex-col gap-5">
          <p>
            Hi, I&#39;m
            <span className="text-secondary"> Henriette Munezero</span>, a
            software engineer from Rwanda. I specialize in Web and Mobile
            Development.
          </p>
          <p>
            I&lsquo;m currently working remotely as a Software Engineer at
            <Link href="https://unita.apeunit.com/" className="text-secondary"> {" "}
              Ape Unit, 
            </Link>
            {" "} a German digital agency based in Berlin.
          </p>
        </div>
        <div className="flex flex-row items-center gap-5 md:mb-3 w-full md:w-auto justify-center">
          <AnimatedButton onClick={() => router.push("/#contact")}>
            <span> Say Hi</span> <Send width={16} height={16} />
          </AnimatedButton>
          <AnimatedButton onClick={() => {}} className="relative">
            <Link
              href="/Henriette_CV.pdf"
              target="_blank"
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            />
            <span>Resume</span> <ArrowDownToLine width={16} height={16} />
          </AnimatedButton>
        </div>
        <Line />
      </div>
    </div>
  );
}

export default Hero;
