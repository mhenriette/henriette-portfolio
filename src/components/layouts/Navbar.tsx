import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className=" p-5 fixed bg-transparent backdrop-blur-sm w-full z-50">
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold text-white">M.H</span>
        <div className="flex items-center gap-2">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Skills</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Contact</Link>
        </div>
        <div>Download cv</div>
      </div>
    </div>
  );
}

export default Navbar