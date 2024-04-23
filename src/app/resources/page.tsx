"use client";
import Link from 'next/link';


export default function Resources() {
  return (
    <div className="bg-black w-[100vw] h-device">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="w-1/3">
            <ul>
              <li  className="text-white font-serif font-semibold text-[13px] mb-2">Polygon Innovation and Design</li> 
              <Link href='/polygon' className='hover:text-[#F451E4]'><li  className="text-white font-serif font-normal text-[13px] mb-2">Unit 1 - Welcome </li> </Link>
              <li  className="text-white font-serif font-normal  text-[13px] mb-2">Unit 2 - Introduction </li>
              <li  className="text-white font-serif font-normal  text-[13px] mb-2">Unit 3 - Polygon 2.0. The Basics</li> 
              <li  className="text-white font-serif font-normal  text-[13px] mb-2">Unit 4 -  Architecture </li>
              <li  className="text-white font-serif font-normal  text-[13px] mb-2">Unit 5 - Polygon Protocols</li> 
              <li  className="text-white font-serif font-normal  text-[13px] "> Take Quiz </li>
            </ul>
          </div>
          <div className="w-2/3">
            <h1 className="text-white font-semibold text-4xl">
              Polygon Innovation and Design
            </h1>
            <p className="text-white font-normal text-justify">
              Polygon technologies will help developers build in an elastically
              scalable and unified ecosystem of ZK-powered Layer 2s on Ethereum,
              where users can create, program and exchange value.
            </p>
            <p className="text-white font-normal text-justify mt-2">
              The Polygon 2.0 vision is a unified multichain ecosystem. A web of
              interoperable ZK-powered Ethereum L2s, with near-instant and
              atomic L2 L2 transactions, and designed to empower developers to
              build without limitations. Developers will choose to build dApps,
              design and launch dedicated application-specific L2 chains, or
              migrate existing EVM Layer 1 chains to become an L2.
            </p>
            <p className="text-white font-normal text-justify mt-2">
              The endgame of Polygon 2.0 is for developers to build in an
              environment that feels and functions more like the internet. This
              means a blockchain ecosystem that can scale without limit,
              seamlessly unified, and backed by the decentralization and
              security of Ethereum.
            </p>
            <p className="text-white font-normal text-justify mt-2">
              Fundamentally, building this web of ZK-powered L2s comes down to
              one challenge: trustless, off-chain computation. In order to scale
              Ethereum, one needs to preserve Ethereum’s execution logic while
              making it more efficient.
            </p>
            <p className="text-white font-normal text-justify mt-2">
              The best way to accomplish this goal is through zero-knowledge
              cryptography as it is capable of providing verifiable proofs that
              attest to the integrity of off-chain computations. Otherwise,
              scaling technologies often have to add additional social-economic
              mechanisms to mediate off-chain computations. The consequence of
              which is delayed settlement of transactions.
            </p>
            <p className="text-white font-normal text-justify mt-2">
              Polygon 2.0 applies the open source, zero-knowledge scaling
              technology developed at Polygon Labs, and this will allow Ethereum
              to scale to the limits of the internet.
            </p>
            <div className="mt-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-full h-10 rounded-full">
              NEXT - UNIT 3: POLYGON 2.0. THE BASICS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
