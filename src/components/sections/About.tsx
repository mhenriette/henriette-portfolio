import Image from "next/image";
import profile from "../../../public/profile.jpg"

export default function About() {
  return (
    <div className="w-full flex items-center justify-center md:h-screen my-auto">
      <div className="md:max-w-6xl w-full flex items-center justify-center gap-12 px-3 flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="font-semibold text-2xl md:text-4xl leading-10">
            A few words about <span className="text-secondary">me</span>
          </h1>
          <div className="w-full h-[400px] md:w-[400px] md:h-[400px] rounded-md overflow-hidden relative shrink-0 block md:hidden">
            <Image src={profile} fill alt="me" className="object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              molestias, provident recusandae temporibus omnis iure illum
              reprehenderit explicabo numquam quibusdam autem veniam dolor sunt
              esse voluptas porro alias earum enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              molestias, provident recusandae temporibus omnis iure illum
              reprehenderit explicabo numquam quibusdam autem veniam dolor sunt
              esse voluptas porro alias earum enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              molestias, provident recusandae temporibus omnis iure illum.
            </p>
          </div>
        </div>
        <div className="w-full h-[400px] md:w-[400px] md:h-[400px] rounded-md overflow-hidden relative shrink-0 hidden md:block">
          <Image src={profile} fill alt="me" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
