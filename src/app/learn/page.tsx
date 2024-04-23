"use client";
import Image from "next/image";
import Link from "next/link";

export default function Learn() {
  return (
    <div className="bg-black w-[100vw] h-[100vh]">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white">Learn</h1>
          </div>
          <div>
            <form className="max-w-md mx-auto bg-[#0B0D0D]">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative bg-[#0B0D0D]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#0B0D0D] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Resources"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-white">
            <Link href="/learn">All </Link>
            <Link href="/ongoing">
              {" "}
              <span className="mx-8"> Ongoing </span>{" "}
            </Link>
            <Link href="/completed">
              <span className="mx-8">Completed</span>
            </Link>
          </h1>
          <div className=" w-[90%] h-px border border-white"></div>
        </div>
        <div className="bg-black grid-row-2 gap-4 grid-flow-col  justify-items-center content-center mt-8">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[90%] mb-5 h-1/2  rounded-lg  border-[#0B0D0D] border-2 shadow-md">
            <div className="grid grid-cols-4 gap-4">
              <div className="w-1/4">
                <Image
                  src="./polygonimage.svg"
                  alt="polygonimage"
                  width={50}
                  height={50}
                  className="mt-4 mx-4"
                />
              </div>
              <div className="mb-4 mt-2">
                <h1 className="text-white font-bold text-[14px] font-sans">
                  Polygon Innovation and Design
                </h1>
                <h2 className="text-white font-light text-xs text-justify">
                  Widely-adopted EVM-compatible 
                  <br />
                  sidechain designed for low transaction
                  <br />
                   costs and fast transaction times
                </h2>
              </div>
              <div className="mt-8">
                <button className="bg-gradient-to-r from-[#A903D2] to-[#410095] hover:bg-[#410095] text-white font-semibold  border-2 border-[#A903D2] w-36 h-10 rounded-full">
                  LEARN
                </button>
              </div>
              <div className="mt-8">
                <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                  TAKE QUIZ
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[90%] mb-5 h-full rounded-lg border-[#0B0D0D] border-2 shadow-md">
            <div className="grid grid-cols-4 gap-4">
              <div className="w-1/4">
                <Image
                  src="./polygonimage.svg"
                  alt="polygonimage"
                  width={50}
                  height={50}
                  className="mt-4 mx-4"
                />
              </div>
              <div className="mb-4 mt-2">
                <h1 className="text-white font-bold text-[14px] font-sans">
                  Understanding Chain Reorgs in PoS
                </h1>
                <h2 className="text-white font-light text-xs text-justify">
                  Find out more about reorgs in PoS; why 
                  <br />
                  they happen and how they work
                </h2>
              </div>
              <div className="mt-8 mb-4">
                <button className="bg-gradient-to-r from-[#A903D2] to-[#410095] hover:bg-[#410095] text-white font-semibold py-2  border-2 border-[#A903D2] w-40 h-10 rounded-full">
                  LEARN
                </button>
              </div>
              <div className="mt-8 mb-4">
                <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                  TAKE QUIZ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
