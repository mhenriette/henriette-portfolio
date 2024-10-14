import { navigationLinks } from "@/data/NavigationLinks";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);

  const updateScrollPadding = useCallback(() => {
    if (navbarRef.current) {
      const navHeight = navbarRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        `${navHeight}px`
      );
    }
  }, [navbarRef]);

  useEffect(() => {
    updateScrollPadding();
    window.addEventListener("resize", updateScrollPadding);

    return () => window.removeEventListener("resize", updateScrollPadding);
  }, [updateScrollPadding]);
  return (
    <div className=" p-5 fixed bg-transparent backdrop-blur-sm w-full z-50" ref={navbarRef}>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold text-white">Mh.</span>
        <div className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              className="borderXwidth relative uppercase pb-1 font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
