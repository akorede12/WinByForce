import Image from "next/image";

const How = () => {
  return (
    <div className="bg-black w-[100vw]">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <h1 className="text-[48px] text-white font-serif font-bold md:mx-80 md:px-6 mb-12">HOW IT WORKS</h1>
        <div className="bg-black grid-cols-2 gap-4 md:flex md:flex-row justify-items-center content-center">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[45%] mb-5 h-full  rounded-lg  border-[#AB50F4] border-2 shadow-md md:mx-8">
            <Image
              src="./search.svg"
              alt="search"
              width={50}
              height={50}
              className="mt-4 mx-48"
            />
            <div className="mx-20 mb-4">
              <h1 className="text-white  font-semibold text-lg font-sans">
                Browse Protocols
              </h1>
              <h2 className="text-white font-light text-sm">
                Explore our curated list of Web3 protocols to
                <br />
                 discover the latest innovations and trends
                <br />
                in the crypto world
                
              
              </h2>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[45%] mb-5 h-full rounded-lg border-[#AB50F4] border-2 shadow-md">
            <Image
              src="./book.svg"
              alt="book"
              width={50}
              height={50}
              className="mt-4 mx-48"
            />
            <div className="mx-20 mb-4">
              <h1 className="text-white font-semibold text-lg font-sans">
                Learn
              </h1>
              <h2 className="text-white font-light text-sm">
                Access comprehensive resources that allow you
                <br /> to deepen your understanding of Web3 technologies
                
                
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-black grid-cols-2 gap-4 md:flex md:flex-row justify-items-center content-center">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[45%] mb-5 h-full rounded-lg border-[#AB50F4] border-2 shadow-md md:mx-8">
            <Image
              src="./question.svg"
              alt="question"
              width={50}
              height={50}
              className="mt-4 mx-48"
            />
            <div className="mx-20 mb-4">
              <h1 className="text-white font-semibold text-lg font-sans">
                Take Quizzes
              </h1>
              <h2 className="text-white font-light text-sm">
                Test your knowledge with  quizzes tailored to each
                <br />
                protocol and earn points  as you advance through
                <br />
                the learning modules
                
              
               
              </h2>
            </div>
          </div>

          <div className="bg-[#0B0D0D] content-card w-full md:w-[45%] mb-5 h-full rounded-lg  border-[#AB50F4] border-2 shadow-md">
            <Image
              src="./gift.svg"
              alt="gift"
              width={50}
              height={50}
              className="mt-4 mx-48"
            />
            <div className="mx-20 mb-8">
              <h1 className="text-white font-semibold text-lg font-sans">
                Earn Tokens
              </h1>
              <h2 className="text-white font-light text-sm">
                Exchange your earned points for valuable tokens.
                <br />
                 Start earning  immediately! Learn, Play & Earn!
                
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
