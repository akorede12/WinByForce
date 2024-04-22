import Image from "next/image";

const Browse = () => {
  return (
    <div className="bg-black w-[100vw] ">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <div className="md:mx-96 mb-4">
        <button className="bg-transparent hover:bg-white text-white font-semibold py-2  border-white border-2 w-64 h-10 rounded-full">
          BROWSE PROTOCOL
        </button>
        </div>
        <div className="bg-black grid-cols-3 gap-10 md:flex md:flex-row mx-10">
          <div className="w-1/3 h-full">
            <h1 className="text-white font-extrabold font-sans text-7xl">5k+</h1>
            <h2 className="text-white font-semibold font-mono text-xl">Members</h2>
          </div>

          <div className="w-1/3 h-full">
            <h1 className="text-white font-extrabold font-sans text-7xl">700k+</h1>
            <h2 className="text-white font-semibold font-mono text-xl">Points Earned</h2>
          </div>

          <div className="w-1/3 h-full">
            <h1 className="text-white font-extrabold font-sans text-7xl">50+</h1>
            <h2 className="text-white font-semibold font-mono text-xl">Protocols</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Browse;
