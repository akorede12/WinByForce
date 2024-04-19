import Image from "next/image";
import HeroButtons from "./components/herobuttons/HeroButton";


export default function Home() {
  return (
    <main >
     <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute -z-10 inset-0">
              <Image
                src='./heroimage.svg'
                alt="heroimage"
                fill
                style={{objectFit:'cover'}}
              />
              
       </div>
         
       <h1 className="text-[96px] text-white font-serif font-bold w-fit">
        Learning
        <br /> Meets
        <br /> Earning

       </h1>
       <h3 className='text-white font-normal text-base'>
       Your Blockchain Playground: Learn, Play, and Earn Your Way Through the Exciting 
      
       </h3>
       <h4 className='text-white font-normal text-base'> World of Web3 with BlocQuest</h4>
       <div className="flex gap-2 mt-2">
       <button className="bg-[#C510C9] hover:bg-white text-white font-semibold py-2  border-[#C510C9] border-2 w-40 h-10 rounded-full">LEARN & EARN</button>
       <button className="bg-transparent hover:bg-white text-white font-semibold py-2  border-white border-2 w-64 h-10 rounded-full">REGISTER AS PROTOCOL</button>
       </div>
       </section>
       <div className="mt-20">
       <HeroButtons/>
       </div>
    </main>
  );
}
