import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ProjectDescription } from "../sections/ProjectDescription";
export default function Project({
  imageUrl,
  title,
  description,
}: {
  title: string;
  imageUrl: StaticImageData;
  description: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full md:w-[21rem] h-96 rounded-2xl border border-[#ffffff33] hover:border-secondary p-4 bg-[#050817]">
          <div className="rounded-md overflow-hidden relative w-full h-44 mb-5">
            <Image src={imageUrl} alt="project" fill />
          </div>
          <div className="">
            <h3 className="font-bold pb-2">{title}</h3>
            <p className="text-slate-400 line-clamp-4">{description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ProjectDescription />
      </DialogContent>        
    </Dialog>
  );
}
