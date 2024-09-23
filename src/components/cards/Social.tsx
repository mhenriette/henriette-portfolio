import { ReactNode } from "react";

export default function Social({children}:{children:ReactNode}) {
  return (
    <div className="rounded-full w-16 h-16 p-2 flex items-center justify-center bg-[#0F0E17] border border-secondary">
      {children}
    </div>
  );
}
