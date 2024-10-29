import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/NavigationLinks"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    updateScrollPadding();
    window.addEventListener("resize", updateScrollPadding);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateScrollPadding);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollPadding]);


  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary ${
        isScrolled ? " backdrop-blur-md py-2 bg-transparent" : "py-5"
      }`}
    >
      <div className="px-3 max-w-6xl mx-auto ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-white to-secondary">
              <span className="text-4xl">M</span>
              <span className="text-md">unezero</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                className={`text-sm uppercase font-semibold tracking-wider transition-colors duration-300 hover:text-secondary ${
                  activeLink === link.link
                    ? "text-white border-b-2 border-secondary"
                    : "text-white"
                }`}
                onClick={() => setActiveLink(link.link)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full h-full p-0 bg-black/90 backdrop-blur-md border-none md:hidden"
            >
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navigationLinks.map((link) => (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="text-2xl font-semibold text-white hover:text-primary transition-colors duration-300"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveLink(link.link);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
