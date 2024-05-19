"use client";
import Image from "next/image";
import Link from "next/link";

export default function Protocol() {
  return (
    <div className="bg-black w-[100vw] h-device">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white ">Protocols</h1>
          </div>
          <div>
            <form className="max-w-md mx-auto bg-[#0B0D0D]">

            {/* setProtocol */}
            
              <div className="flex">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown-search-city"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-[#0B0D0D] border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-item"
                  className="z-10 hidden bg-[#0B0D0D] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button-2"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-[#0B0D0D] dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex items-center">All</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-[#0B0D0D] dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex items-center">Ongoing</div>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 text-sm text-white hover:bg-[#0B0D0D] dark:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <div className="inline-flex items-center">
                          Completed
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative bg-[#0B0D0D] w-full">
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
              </div>
            </form>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-white">
            All <span className="mx-8"> Ongoing </span>{" "}
            <span className="mx-8">Completed</span>
          </h1>
          <div className=" w-[90%] h-px border border-white"></div>
        </div>
        <div className="bg-black grid-col-2 gap-4 md:flex md:flex-row justify-items-center content-center mt-8">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-full  rounded-lg  border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./polygon.svg"
              alt="polygon"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mx-4 mb-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                Polygon <span className="bg-[#A1977E21] mx-8 text-[#DDA004] rounded-full p-2 font-normal text-sm">Medium</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                Polygon is a stack of protocols designed to fix Ethereum
                scalability issues. The Polygon network addresses the network
                challenges by handling transactions on a separate
                Ethereum-compatible blockchain. Polygon then returns
                transactions to the main Ethereum blockchain post-processing.
              </h2>
            </div>

            <div className="mb-4 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-full rounded-lg border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./hyperledger.svg"
              alt="hyperledger"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mx-4 mb-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                Hyperledger <span className="bg-[#A1977E21] mx-8 text-[#70DD04] rounded-full p-2 font-normal">Easy</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                Hyperledger is aiming to build a new blockchain platform that is
                driven by industry use cases. As there have been number of
                contributions made to the Hyperledger project by the community,
                Hyperledger blockchain platform is evolving into a protocol for
                business transactions.
              </h2>
            </div>

            <div className="mb-4 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black grid-col-2 gap-4 md:flex md:flex-row justify-items-center content-center mt-8">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-1/2  rounded-lg  border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./zk.svg"
              alt="zk"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mb-4 mx-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                zkSync  <span className="bg-[#A1977E21] mx-8 text-[#CC1307] rounded-full p-2 font-normal">Hard</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                zkSync is a trustless Layer 2 protocol for scalable low-cost
                payments on Ethereum, powered by zkRollup technology. It is a
                user-centric zk rollup platform from Matter Labs, with security,
                user experience, and developer experience as the core focus.
              </h2>
            </div>

            <div className="mb-4 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-full rounded-lg border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./hyperlane.svg"
              alt="hyperlane"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mb-4 mx-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                Hyperlane <span className="bg-[#A1977E21] mx-8 text-[#DDA004] rounded-full p-2 font-normal">Medium</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                Hyperlane, previously known as Abacus, is a generalized
                interchain messaging protocol offering an on-chain API that
                sends and receives messages across chains. It is primarily a
                tool built to empower developers to send data between chains and
                create natively cross-chain applications.
              </h2>
            </div>

            <div className="mb-7 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black grid-col-2 gap-4 md:flex md:flex-row justify-items-center content-center mt-8">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-1/2  rounded-lg  border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./polygon.svg"
              alt="polygon"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mb-4 mx-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                Polygon <span className="bg-[#A1977E21] mx-8 text-[#DDA004] rounded-full p-2 font-normal">Medium</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                Polygon is a stack of protocols designed to fix Ethereum
                scalability issues. The Polygon network addresses the network
                challenges by handling transactions on a separate
                Ethereum-compatible blockchain. Polygon then returns
                transactions to the main Ethereum blockchain post-processing.
              </h2>
            </div>

            <div className="mb-4 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-full rounded-lg border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./hyperledger.svg"
              alt="hyperledger"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mb-4 mx-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                Hyperledger  <span className="bg-[#A1977E21] mx-8 text-[#70DD04] rounded-full p-2 font-normal">Easy</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                Hyperledger is aiming to build a new blockchain platform that is
                driven by industry use cases. As there have been number of
                contributions made to the Hyperledger project by the community,
                Hyperledger blockchain platform is evolving into a protocol for
                business transactions.
              </h2>
            </div>

            <div className="mb-4 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black grid-col-2 gap-4 md:flex md:flex-row justify-items-center content-center mt-8">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-1/2  rounded-lg  border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./zk.svg"
              alt="zk"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mb-4 mx-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                zkSync  <span className="bg-[#A1977E21] mx-8 text-[#CC1307] rounded-full p-2 font-normal">Hard</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                zkSync is a trustless Layer 2 protocol for scalable low-cost
                payments on Ethereum, powered by zkRollup technology. It is a
                user-centric zk rollup platform from Matter Labs, with security,
                user experience, and developer experience as the core focus.
              </h2>
            </div>

            <div className="mb-4 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[50%] mb-5 h-full rounded-lg border-[#0B0D0D] border-2 shadow-md">
            <Image
              src="./hyperlane.svg"
              alt="hyperlane"
              width={100}
              height={100}
              className="mt-4 mx-4"
            />

            <div className="mb-4 mx-4">
              <h1 className="text-white font-bold text-[14px] font-sans mb-4">
                Hyperlane <span className="bg-[#A1977E21] mx-8 text-[#DDA004] rounded-full p-2 font-normal">Medium</span>
              </h1>
              <h2 className="text-white font-light text-xs text-justify">
                Hyperlane, previously known as Abacus, is a generalized
                interchain messaging protocol offering an on-chain API that
                sends and receives messages across chains. It is primarily a
                tool built to empower developers to send data between chains and
                create natively cross-chain applications.
              </h2>
            </div>

            <div className="mb-7 mx-4">
              <button className="bg-transparent hover:bg-white text-white font-semibold py-2 border-white border-2 w-40 h-10 rounded-full">
                <Link href="/resources">View Resources</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
