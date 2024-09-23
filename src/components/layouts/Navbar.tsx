import { navigationLinks } from '@/data/NavigationLinks';
import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div className=" p-5 fixed bg-transparent backdrop-blur-sm w-full z-50">
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold text-white">M.H</span>
        <div className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link href={link.link} key={link.id} className="borderXwidth relative bg-red-400-">
              {link.name}
            </Link>
          ))}
        </div>
        <div>Download cv</div>
      </div>
    </div>
  );
}

export default Navbar