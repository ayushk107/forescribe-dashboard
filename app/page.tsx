import dynamic from "next/dynamic";
const WelcomeSection = dynamic(() => import("./components/WelcomeSection"), {
});
const GridLayout = dynamic(() => import("./components/GridLayout"), {
  ssr: true, 
});
export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col">
      
      <WelcomeSection />
      <div className="w-full bg-black px-8 pb-8 pt-0">
        <GridLayout />
      </div>
      
    </main>
  );
}