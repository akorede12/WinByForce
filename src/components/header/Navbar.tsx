"use client";

import Link from 'next/link';
import Image from 'next/image';

const NavigationBar: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black">
      <nav className="flex items-center justify-between p-6 lg:px-8 lg:mx-8">
        <div className="flex items-center">
          <h1 className="text-xl text-white font-bold">BlocQuest</h1>
        </div>
        <div className="flex items-center">
          <Image src="/group.png" alt="Group icon" width={28} height={28} />
          <Link className="text-white text-md mx-4" href="/opts">Opts</Link>
          <button className="bg-[#000000] hover:bg-white text-white font-semibold py-2 px-4 border-[#ffffff] border-2 rounded-full">
            <Link href="/welcome">Connect Wallet</Link>
          </button>
          <Image className='ml-4' src="/profileIcon.png" alt="Group icon" width={28} height={28} />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;

