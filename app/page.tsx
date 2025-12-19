import dynamic from "next/dynamic";

// ✅ 1. Dynamic Imports (Bonus Point for Performance!)
// This loads the components only when needed, making the page faster.
const WelcomeSection = dynamic(() => import("./components/WelcomeSection"));
const GridLayout = dynamic(() => import("./components/GridLayout"));

export default function Home() {
  return (
    // ✅ 2. Main Background Wrapper
    <main className="bg-black min-h-screen flex flex-col items-center overflow-x-hidden">
       
       {/* Top Login Section */}
       <div className="w-full">
         <WelcomeSection />
       </div>

       {/* Bottom Grid Section */}
       <div className="w-full max-w-[1600px] px-4 pb-20">
         <GridLayout />
       </div>
       
    </main>
  );
}