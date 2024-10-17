import { navigationLinks } from "@/data/NavigationLinks";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <div
      className="py-5 px-4 sm:px-10 fixed bg-transparent backdrop-blur-sm w-full z-50"
      ref={navbarRef}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <span className="text-4xl font-bold text-white">Mh.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
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
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full h-full p-0 bg-transparent backdrop-blur-md bg-opacity-80 border-none"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navigationLinks.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
