import Image from "next/image";
import Link from "next/link";
import HeroButtons from "@/components/herobuttons/HeroButton";
import Browse from "@/components/browse/Browse";
import How from "@/components/how/How";
import Experience from "@/components/experience/Experience";
import { Footer } from "@/components/footer/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-screen">
       
      <section>
        <Image
          src="./heroimage.svg"
          alt="heroimage"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="absolute -z-10 inset-0"
        />

        <h1 className="text-[96px] text-white font-serif font-bold md:mx-8">
          LEARNING
          
        </h1>
        <h2 className="text-[96px] text-white font-serif font-bold md:mx-20">MEETS
          </h2>
          <h3 className="text-[96px] text-white font-serif font-bold md:mx-8">EARNING</h3>
        <h3 className="text-white font-normal text-base">
          Your Blockchain Playground: Learn, Play, and Earn Your Way Through the
          Exciting
        </h3>
        <h4 className="text-white font-normal text-base md: mx-36">
          {" "}
          World of Web3 with BlocQuest
        </h4>
        <div className="flex gap-2 mt-8 md:mx-8">
          <button className="bg-[#C510C9] hover:bg-white text-white font-semibold py-2  border-white border-2 w-40 h-10 rounded-full">
            <Link href="/learn">LEARN & EARN</Link>
          </button>
          <button className="bg-transparent hover:bg-white text-white font-semibold py-2  border-white border-2 w-64 h-10 rounded-full">
            REGISTER AS PROTOCOL
          </button>
        </div>
      </section>
      <div className="mt-40">
        <HeroButtons />
      </div>
      <div>
        <Browse />
      </div>
      <div>
        <How />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
}
