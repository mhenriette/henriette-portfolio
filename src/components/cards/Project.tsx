import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ProjectDescription } from "../sections/ProjectDescription";
import dynamic from "next/dynamic";
const Info = dynamic(() => import("lucide-react").then((mod) => mod.Info), {
  ssr: false,
});
const ChevronRight = dynamic(
  () => import("lucide-react").then((mod) => mod.ChevronRight),
  {
    ssr: false,
  }
);
const Button = dynamic(() => import("../ui/button").then((mod) => mod.Button), {
  ssr: false,
});

export default function Project({
  images,
  title,
  description,
  githubLink,
  languages,
  liveLink,
}: {
  title: string;
  images: StaticImageData[];
  description: string;
  githubLink?: string;
  languages: string[];
  liveLink?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-2xl border border-[#ffffff33] hover:border-secondary p-4 bg-[#050817] flex flex-col">
          <div className="rounded-md overflow-hidden relative w-full aspect-video mb-5">
            <Image src={images[0]} alt="project preview" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">{title}</h3>
            <p className="text-slate-400 line-clamp-4">{description}</p>
            <Button variant="gradient" size="xs" className="mt-auto">
              <div className="relative z-10 flex items-center justify-center w-full py-2">
                <Info className="mr-2 h-4 w-4" />
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ProjectDescription
          title={title}
          description={description}
          languages={languages}
          githubLink={githubLink}
          liveLink={liveLink}
          images={images}
        />
      </DialogContent>
    </Dialog>
  );
}
