export const Footer = () => {
  return (
    <div
      className="px-[30px] md:px-[100px] py-[60px]
      bg-[#0B0D0D] grid grid-cols-1 md:flex md:flex-row gap-4"
    >
      <div className="md:flex flex-wrap md:flex-row justify-between w-full">
        <div className="md:flex justify-center items-start md:gap-[100px]">
          <div className="flex flex-row gap-[100px]">
            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-[#BBBBBB] text-[25px] md:text-[40px] font-semibold">
                Learn & Earn
              </p>
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-[#BBBBBB] text-[25px] md:text-[40px] font-semibold">
                Protocols
              </p>
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-[#BBBBBB] text-[25px] md:text-[40px] font-semibold">
                Community
              </p>
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-[#BBBBBB] text-[25px] md:text-[40px] font-semibold">
                Terms Of Service
              </p>
            </div>
          </div>
        </div>
        <p className="text-[#BBBBBB] text-[25px] md:text-[40px] font-semibold">
          BlocQuest 2024
        </p>
      </div>
    </div>
  );
};
