"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "./animations";
import { FcGoogle } from "react-icons/fc"; 
import { FaMicrosoft } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import Image from "next/image";
import Logo from "./Logo"; 
import { useForm } from "react-hook-form"; 

type FormInputs = {
  agreeToTerms: boolean;
};

export default function WelcomeSection() {
  const [loadingProvider, setLoadingProvider] = useState<"google" | "microsoft" | null>(null);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs, provider: "google" | "microsoft") => {
    setLoadingProvider(provider);
    setTimeout(() => setLoadingProvider(null), 2000);
  };

  const handleButtonClick = async (provider: "google" | "microsoft") => {
    const isValid = await trigger("agreeToTerms");
    if (isValid) {
      handleSubmit((data) => onSubmit(data, provider))();
    }
  };

  return (
    <motion.div 
      className="relative w-full h-[650px] flex items-center justify-center overflow-hidden"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/bg_img.png" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/87 to-[#3b0764]/90"></div>
      </div>

      <div className="absolute top-8 left-16 z-20">
        <Logo />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="bg-black/40 backdrop-blur-x1 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center w-[320px] py-4 px-6">
          <div className="mb-2 relative w-10 h-10">
             <Image src="/forescribe_logo.jpg" alt="Forescribe" fill className="object-contain" />
          </div>

          <div className="text-center mb-2">
            <h1 className="text-lg font-bold text-white mb-1">Welcome to Forescribe</h1>
          </div>

          <div className="w-full space-y-3">
           
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox"
                    {...register("agreeToTerms", { required: "Please agree to the terms to continue." })}
                    className="peer h-3.5 w-3.5 cursor-pointer appearance-none rounded border border-gray-500 bg-white/10 transition-all checked:border-[#8B3DFF] checked:bg-[#8B3DFF] hover:border-[#8B3DFF]"
                  />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <span className="text-[10px] text-gray-300 group-hover:text-white transition-colors">
                  I agree to the Terms & Privacy Policy
                </span>
              </label>

              <AnimatePresence>
                {errors.agreeToTerms && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[9px] text-red-400 font-medium pl-1">
                    * {errors.agreeToTerms.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              type="button" 
              onClick={() => handleButtonClick("google")}
              disabled={loadingProvider !== null}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group w-full bg-[#8B3DFF] hover:bg-[#7b36e0] text-white py-2.5 rounded-lg font-medium transition-all text-xs shadow-lg shadow-purple-500/20 overflow-hidden flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
              
              {loadingProvider === "google" ? (
                 <CgSpinner className="animate-spin text-white text-lg" />
              ) : (
                <>
                  <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full p-0.5 relative z-10 shrink-0">
                    <FcGoogle className="text-[14px]" /> 
                  </div>
                  <span className="relative z-10">Continue with Google</span>
                 
                  <div className="w-5 h-5 invisible shrink-0" />
                </>
              )}
            </motion.button>
            
            <motion.button 
              type="button"
              onClick={() => handleButtonClick("microsoft")}
              disabled={loadingProvider !== null}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full bg-[#2A2A2A] hover:bg-[#333] border border-white/10 text-white py-2.5 rounded-lg font-medium transition-colors text-xs flex items-center justify-center gap-2"
            >
               {loadingProvider === "microsoft" ? (
                 <CgSpinner className="animate-spin text-white text-lg" />
              ) : (
                <>
                  <div className="w-5 h-5 flex items-center justify-center relative z-10 shrink-0">
                    <FaMicrosoft className="text-white text-[14px]" />
                  </div>
                  <span className="relative z-10">Continue with Microsoft</span>

                  <div className="w-5 h-5 invisible shrink-0" />
                </>
              )}
            </motion.button>

          </div>
        </div>
        <div className="w-[320px]"> 
          <p className="text-white text-[11px] leading-relaxed text-left font-medium">
            Read our detailed{" "}
            <span className="text-[#8B3DFF] underline decoration-[#8B3DFF] underline-offset-2 decoration-2 cursor-pointer hover:text-[#a260ff] transition-colors">
              Terms & Conditions
            </span>
            {" "}and{" "}
            <span className="text-[#8B3DFF] underline decoration-[#8B3DFF] underline-offset-2 decoration-2 cursor-pointer hover:text-[#a260ff] transition-colors">
              Privacy Policy
            </span>.
          </p>
        </div>
      </div>
    </motion.div>
  );
}