"use client";

import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-black">
      <div className="fixed top-0 right-0 left-0 bg-gradient z-50 bg-black p-2 border-y ">
        <div className="flex gap-2 justify-center items-center px-10 pt-8 pr-10">
          <ul className="flex m-auto gap-16">
            <li className="hidden md:inline-block text-white font-serif">
              <Link href="/">BlocQuest</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
