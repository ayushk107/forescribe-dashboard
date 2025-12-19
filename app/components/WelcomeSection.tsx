"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaMicrosoft } from "react-icons/fa"; 
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";
export default function WelcomeSection() {
  const [loadingProvider, setLoadingProvider] = useState<"google" | "microsoft" | null>(null);
  const handleLogin = (provider: "google" | "microsoft") => {
    setLoadingProvider(provider);
    setTimeout(() => setLoadingProvider(null), 2000);
  };
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="bg-black/15 backdrop-blur-[5px] rounded-2xl shadow-xl border border-black/10 
                      w-full max-w-[330px] 
                      pt-5 px-5 pb-6
                      flex flex-col items-center">
        <div className="flex flex-col items-center gap-2.5 w-full mb-5">
           <div className="relative w-8 h-8"> 
              <Image src="/fsm-logo.png" alt="Logo" fill className="object-contain" />
           </div>
           <h1 className="text-[17px]  text-white tracking-tight">
             Welcome to Forescribe
           </h1>
        </div>
        <div className="w-full flex flex-col items-center gap-4">
          <button 
            onClick={() => handleLogin("google")}
            disabled={loadingProvider !== null}
            className="w-[80%] bg-[#8B3DFF] hover:bg-[#7a34e3] text-white h-9 rounded-lg font-medium transition-all relative overflow-hidden active:scale-[0.98]"
          >
            {loadingProvider === "google" ? (
              <div className="flex items-center justify-center w-full h-full">
                <CgSpinner className="animate-spin text-lg" />
              </div>
            ) : (
              <>
                <div className="absolute left-11 top-1/2 -translate-y-1/2">
                   <FaGoogle className="text-white text-lg" />
                </div>
                <span className="w-full text-center text-xs block pl-8">Continue with Google</span>
              </>
            )}
          </button>
          <button 
            onClick={() => handleLogin("microsoft")}
            disabled={loadingProvider !== null}
            className="w-[80%] bg-[#2A2A2A] hover:bg-[#333] border border-white/5 text-gray-200 h-9 rounded-lg font-medium transition-all relative overflow-hidden active:scale-[0.98]"
          >
             {loadingProvider === "microsoft" ? (
               <div className="flex items-center justify-center w-full h-full">
                 <CgSpinner className="animate-spin text-lg" />
               </div>
            ) : (
              <>
                <div className="absolute left-11 top-1/2 -translate-y-1/2">
                   <FaMicrosoft className="text-lg" />
                </div>
                <span className="w-full text-center text-xs block pl-12">Continue with Microsoft</span>
              </>
            )}
          </button>
        </div>

      </div> 
      <div className="-mt 0 text-left w-full max-w-[320px] px-0">
        <p className="text-white/90 text-[10px] leading-snug">
          By clicking &quot;Continue with Google/Microsoft&quot; above, you acknowledge that you have read and understood, and agree to Forescribe&apos;s{" "}
          <span className="text-[#8B3DFF] hover:text-[#a260ff] cursor-pointer underline decoration-[#8B3DFF] underline-offset-2">Terms & Conditions</span>
          {" "}and{" "}
          <span className="text-[#8B3DFF] hover:text-[#a260ff] cursor-pointer underline decoration-[#8B3DFF] underline-offset-2">Privacy Policy</span>.
        </p>
      </div>
    </motion.div>
  );
}