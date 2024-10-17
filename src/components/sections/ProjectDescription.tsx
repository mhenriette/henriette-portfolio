import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dacade from "../../../public/dacade.png";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ProjectCardProps {
  title?: string
  githubLink?: string
  description?: string
  languages?: string[]
  images?: string[]
}

export function ProjectDescription({
  title = "My Awesome Project",
  githubLink = "https://github.com/username/repo",
  description = "This is a sample project description. It showcases the use of Next.js and Tailwind CSS.",
  languages = ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  images = ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
}: ProjectCardProps) {
  return (
    <Card className="w-full bg-[#050817] text-white border-none md:rounded-2xl ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Get code
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="mb-4 text-slate-400 text-lg">{description}</CardDescription>
        <Separator className="my-4 bg-[#ffffff33] opacity-50" />
        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <Badge
              key={lang}
              variant="secondary"
              className="bg-[#131924] text-white hover:bg-primary/80 text-sm px-4 py-2"
            >
              {lang}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[303/170] overflow-hidden rounded-md"
            >
              <Image
                src={dacade}
                alt={`Project image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full border-[#ffffff33] text-white hover:bg-[#2a292933] hover:text-white"
          asChild
        >
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}