import { ChevronDown, ExternalLink, Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCallback, useEffect, useRef, useState } from "react"

interface ProjectCardProps {
  title: string
  githubLink?: string
  description: string
  languages: string[]
  images?: StaticImageData[]
  liveLink?: string
}

export function ProjectDescription({
  title,
  githubLink,
  description,
  languages,
  images,
  liveLink
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = useState(false)
  const calculateHeight =useCallback(()=>{
    const card = cardRef.current
    if(card){
      setShowScroll(card.scrollHeight > card.clientHeight && card.scrollTop < 20)
    }
    card?.addEventListener("scroll", ()=>{
       setShowScroll(card.scrollHeight > card.clientHeight && card.scrollTop < 20)
    })
    return () =>
      card?.removeEventListener("scroll", () => {
        setShowScroll(
          card.scrollHeight > card.clientHeight && card.scrollTop < 20
        );
      });
  }, [])
  useEffect(()=>{
    calculateHeight()
  }, [calculateHeight])
  return (
    <Card
      className="w-full bg-[#050817] text-white border-none md:rounded-2xl max-h-[40rem] overflow-y-scroll projectScroll"
      ref={cardRef}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Get code
            </Link>
          </Button>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="mb-4 text-slate-400 text-lg flex flex-col gap-2">
          {description.split("\n").map((paragraph, index)=><p key={index}>{paragraph}</p>)}
        </CardDescription>
        <Separator className="my-4 bg-[#ffffff33] opacity-50" />
        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <Badge
              key={lang}
              variant="secondary"
              className="bg-[#131924] text-white hover:bg-primary/80 text-sm px-4 py-2 capitalize"
            >
              {lang}
            </Badge>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images?.slice(1).map((src, index) => (
            <div
              key={index}
              className="relative aspect-[800/400] overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {liveLink && (
          <Button
            variant="outline"
            className="w-full border-[#ffffff33] text-white hover:bg-[#2a292933] hover:text-white"
            asChild
          >
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Link>
          </Button>
        )}
      </CardFooter>
      {showScroll && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-75" />
        </div>
      )}
    </Card>
  );
}