import { ReactNode } from "react";
import Link from "next/link";
export default function Social({children, href}:{children:ReactNode, href:string}) {
  return (
    <Link href={href} target="_blank" className="rounded-full w-16 h-16 p-2 flex items-center justify-center bg-primary border border-secondary">
      {children}
    </Link>
  );
}
