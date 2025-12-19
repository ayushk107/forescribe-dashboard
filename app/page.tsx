import dynamic from "next/dynamic";
import Image from "next/image";
import Logo from "./components/Logo"; 

const WelcomeSection = dynamic(() => import("./components/WelcomeSection"));
export default function Home() {
  return (
    <main className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
       <div className="absolute inset-0 z-0">
         <Image 
           src="/back_img.png" 
           alt="Background" 
           fill 
           priority 
           quality={100}
           className="object-cover object-center" 
         />
         <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/90 to-[#8B3DFF]/88 z-10 pointer-events-none" />
       </div>
       <div className="absolute top-6 left-10 md:top-8 md:left-24 z-20">
         <Logo />
       </div>
       <div className="relative z-30 w-full px-4 flex justify-center">
         <WelcomeSection />
       </div>
       
    </main>
  );
}