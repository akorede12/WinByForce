import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute -z-10 inset-0">
              <Image
                src='./heroimage.svg'
                alt="heroimage"
                fill
                style={{objectFit:'cover'}}
              />
              
       </div>
          
    </main>
  );
}
