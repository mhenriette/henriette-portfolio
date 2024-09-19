import Image from 'next/image'
import React from 'react'
import mune from "../../../public/munezero.jpeg"
import { Button } from '../ui/button';
import Line from '../ui/Line';
import { GithubIcon, Instagram, Linkedin } from "lucide-react";


function Hero() {
  return (
    <div className="md:h-screen w-full flex flex-col items-center py-16 relative">
      <div className="flex flex-col items-center gap-5 md:max-w-6xl pt-20 px-3">
        <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border overflow-hidden">
            <Image src={mune} alt="owner" />
          </div>
        </div>
        <div className="text-xl md:text-3xl text-center w-full leading-normal">
          <p>
            Hi, I&#39;m
            <span className="text-secondary"> Henriette Munezero</span>, a
            software engineer from Rwanda. I specialize in Web and Mobile
            Development, and I&#39;m passionate about transforming ideas into
            impactful products
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Button>Contact me here</Button>
          <Button variant="destructive">Download cv</Button>
          <Button variant="destructive">
            <Linkedin />
          </Button>
          <Button variant="destructive">
            <GithubIcon />
          </Button>
          <Button variant="destructive">
            <Instagram />
          </Button>
        </div>
        <Line />
      </div>
    </div>
  );
}

export default Hero