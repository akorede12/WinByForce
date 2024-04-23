export const Footer = () => {
  return (
    <div className="bg-[#0B0D0D] grid-row-3 gap-2 grid-flow-col justify-items-center content-center mt-8 ">
      <div className="md:mx-96 md:px-52 mt-8">
        <h1 className="text-[#BBBBBB] font-mono font-bold text-3xl">
          BlocQuest
        </h1>
      </div>

      <div
        className="px-[30px] md:px-[100px] py-[60px] md:mx-40
      bg-[#0B0D0D] grid grid-cols-1 md:flex md:flex-row gap-4"
      >
        <div className="md:flex flex-wrap md:flex-row justify-between w-full">
          <div className="md:flex justify-center items-start md:gap-[100px]">
            <div className="flex flex-row gap-[100px]">
              <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                <p className="text-[#BBBBBB] text-[15px] md:text-[20px] font-semibold">
                  Learn & Earn
                </p>
              </div>

              <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                <p className="text-[#BBBBBB] text-[15px] md:text-[20px] font-semibold">
                  Protocols
                </p>
              </div>

              <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                <p className="text-[#BBBBBB] text-[15px] md:text-[20px] font-semibold">
                  Community
                </p>
              </div>

              <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                <p className="text-[#BBBBBB] text-[15px] md:text-[20px] font-semibold">
                  Terms Of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mx-96 md:px-48 mb-2">
        <h1 className="text-[#BBBBBB] font-mono text-2xl font-bold"> &copy; BlocQuest 2024</h1>
      </div>
    </div>
  );
};
