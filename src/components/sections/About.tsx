import Image from "next/image";
import profile from "../../../public/certgrad.jpg";

export default function About() {
  return (
    <div
      className="w-full flex items-center justify-center py-8 md:py-12"
      id="about"
    >
      <div className="md:max-w-6xl w-full flex items-center justify-center gap-12 px-3 flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="font-semibold text-2xl md:text-3xl leading-10">
            A few words about <span className="text-secondary">me</span>
          </h1>
          <div className="aspect-[400/400] rounded-md overflow-hidden relative shrink-0 block md:hidden">
            <Image src={profile} fill alt="me" className="object-cover" />
          </div>
          <div className="flex flex-col gap-6">
            <p>
              I&#39;m passionate about transforming ideas into impactful
              products, offering 2+ years of experience in the field. I am very
              enthusiastic about web3 and frontend technologies.
            </p>
            <p>
              {" "}
              I&apos;ve completed an in-depth bootcamp that helped me develop
              strong communication skills, especially in giving and receiving
              feedback. I actively engage in discussions about new technologies
              and best practices with my colleagues, always promoting continuous
              learning and improvement.{" "}
            </p>
            <p>
              I enjoy taking on coding challenges to keep my skills sharp and
              stay up to date with the latest tech trends. I&apos;m experienced
              in agile environments and love working with teams to bring ideas
              to life. When I&apos;m not coding, you can find me reading books,
              watching movies, or spending time with my family.
            </p>
          </div>
        </div>
        <div className="md:w-[25rem] md:h-[25rem] lg:w-[31.25rem] lg:h-[31.25rem] rounded-md overflow-hidden relative shrink-0 hidden md:block">
          <Image src={profile} fill alt="me" className="object-cover"  />
        </div>
      </div>
    </div>
  );
}
