import Image from "next/image";
import tailwind from "../../../public/tailwind.webp";

export default function Stack() {
  return (
    <div className="group relative bg-[#080A17] w-40 h-40 flex rounded-xl shadow-2xl flex-col border hover:scale-105 transition-all duration-500 items-center justify-center text-4xl whitespace-nowrap border-[#27272a] gap-3">
      <div className="overflow-hidden rounded-full w-16 h-16 relative">
        <Image
          src={tailwind}
          fill
          alt="logo"
          className="border border-neutral-400"
        />
      </div>
      <span className="text-lg font-bold text-white">TailwindCSS</span>
    </div>
  );
}
