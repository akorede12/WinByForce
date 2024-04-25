"use client";

import { useState } from 'react';
import { getProvider } from '@/lib/ethereum'; // Ensure this path matches your project structure
import Link from 'next/link';
import Image from 'next/image';
import { ethers } from 'ethers'; // Import ethers for additional Ethereum functionality if needed

const NavigationBar: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWalletHandler = async (): Promise<void> => {
    try {
      const provider = await getProvider('Amoy'); // Use the utility function to get the provider
      const signer = provider.getSigner(); // Get the signer from the provider
      const address = await signer.getAddress(); // Get the connected wallet address
      setWalletAddress(address);
    } catch (err) {
      console.error("Error connecting to wallet:", err);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black">
      <nav className="flex items-center justify-between p-6 lg:px-8 lg:mx-8">
        <div className="flex items-center">
          <h1 className="text-xl text-white font-bold">BlocQuest</h1>
        </div>
        <div className="flex items-center">
          <Image src="/group.png" alt="Group icon" width={28} height={28} />
          <Link href="/opts" passHref><span className="text-white text-md mx-4">Opts</span></Link>
          {walletAddress ? (
            <span className="text-white text-md mx-4">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
          ) : (
            <button onClick={connectWalletHandler} className="bg-[#000000] hover:bg-white text-white font-semibold py-2 px-4 border-[#ffffff] border-2 rounded-full">
              Connect Wallet
            </button>
          )}
          <Image className='ml-4' src="/profileIcon.png" alt="Profile icon" width={28} height={28} />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
