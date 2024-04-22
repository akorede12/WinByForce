import Image from "next/image";


const Experience = () =>{
    return (
      
       <div className="flex  flex-col items-center justify-between p-24">
        <Image
                  src='./experience.svg'
                  alt="experience"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  className="absolute -z-10 inset-0"
                />
                
        <h1 className="text-[96px] text-white font-serif font-bold w-fit">
         EXPERIENCE THE 
          <br /> THRILLS NOW
          </h1>
        <div className="flex gap-2 mt-2">
         <button className="bg-[#C510C9] hover:bg-white text-white font-semibold py-2  border-[#C510C9] border-2 w-40 h-10 rounded-full">LEARN & EARN</button>
         
         </div>
         </div>
         
     
    );
  }
  
  export default Experience;