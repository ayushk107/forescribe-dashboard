import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-0">
      <div className="relative w-10 h-10">
         <Image 
           src="/fsm-logo.png" 
           alt="Forescribe Logo" 
           fill 
           className="object-contain" 
         />
      </div>
      <span className="font-small text-2xl text-white tracking-tight">
        forescribe
      </span>
    </div>
  );
}