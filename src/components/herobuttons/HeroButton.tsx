import Image from "next/image";

const HeroButtons = () => {
  return (
    <div className="bg-black w-[100vw]">
      <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
        <div className="bg-black grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="bg-[#0B0D0D] w-1/4 place-content-center p-2 rounded-lg">
            <Image
              src="./polygon.svg"
              alt="polygon"
              width={100}
              height={100}
            />
          </div>

          <div className="bg-[#0B0D0D] place-content-center w-1/4 p-2 rounded-lg">
          <Image
              src="./hyperledger.svg"
              alt="hyperledger"
              width={100}
              height={100}
            />
          </div>

          <div className="bg-[#0B0D0D] place-content-center w-1/4 p-2 rounded-lg">
          <Image
              src="./zk.svg"
              alt="zk"
              width={100}
              height={100}
            />
          </div>
          <div className="bg-[#0B0D0D] place-content-center w-1/4 p-2 rounded-lg">
          <Image
              src="./hyperlane.svg"
              alt="hyperlane"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroButtons;
