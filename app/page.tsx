import dynamic from "next/dynamic";
import dynamic from "next/dynamic";

const WelcomeSection = dynamic(() => import("./components/WelcomeSection"));
const GridLayout = dynamic(() => import("./components/GridLayout"));

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center overflow-x-hidden">
       
       <div className="w-full">
         <WelcomeSection />
       </div>

       {/* Added 'px-4' for mobile padding so grid doesn't touch edges */}
       <div className="w-full max-w-[1600px] px-4 md:px-8 pb-20">
         <GridLayout />
       </div>
       
    </main>
  );
}