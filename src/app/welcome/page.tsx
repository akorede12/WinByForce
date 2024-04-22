"use client";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="bg-black w-[100vw] h-device">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <div className="mx-96 px-6">
            <h1 className="text-4xl font-serif font-bold text-white">Welcome</h1>
        </div>
        <div className="bg-black grid-cols-2 gap-4 md:flex md:flex-row justify-items-center content-center mt-8">
          <div className="bg-[#0B0D0D] content-card w-full md:w-[45%] mb-5 h-full  rounded-lg  border-[#AB50F4] border-2 shadow-md">
            <Image
              src="./book.svg"
              alt="book"
              width={50}
              height={50}
              className="mt-4 mx-48"
            />
            <div className="mx-20 mb-8">
              <h1 className="text-white font-semibold text-lg font-sans">
                Learn
              </h1>
              <h2 className="text-white font-light text-sm">
                Engage with interactive content designed
                <br />
                to enhance your knowledge and skills
              </h2>
            </div>
          </div>

          
        
          <div className="bg-[#0B0D0D] content-card w-full md:w-[45%] mb-5 h-full rounded-lg border-[#AB50F4] border-2 shadow-md">
            <Image
              src="./question.svg"
              alt="question"
              width={50}
              height={50}
              className="mt-4 mx-48"
            />
            <div className="mx-20 mb-8">
              <h1 className="text-white font-semibold text-lg font-sans">
                Take Quizzes
              </h1>
              <h2 className="text-white font-light text-sm">
                Challenge yourself with quizzes tailored to
                <br />
                each protocol
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

