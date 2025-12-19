"use client";
import { motion } from "framer-motion";
import { cardHover } from "./animations";
import CompanyLogo from "./CompanyLogo";

interface FeatureCardProps {
  title: string;
  description: string;
  isQuote?: boolean;
  cardColor: string;
  visualColor: string;
  textColor?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  isQuote = false,
  cardColor,
  visualColor,
  textColor = "text-slate-900"
}: FeatureCardProps) {
  return (
    <motion.div
      className={`break-inside-avoid rounded-xl p-4 ${cardColor} transition-transform hover:scale-[1.02] duration-300 h-[400px] flex flex-col`}
      variants={cardHover}
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <div className={`h-44 rounded-lg mb-8 flex items-center justify-center shadow-inner ${visualColor} shrink-0`}>
         <CompanyLogo company={title} size="lg" />
      </div>

      <div className="text-center flex-1 flex flex-col justify-center w-full px-1">
        <h3 className={`font-bold text-2xl mb-4 ${textColor}`}>{title}</h3>
        
        {isQuote ? (
          <p className={`text-base leading-snug font-semibold ${textColor} break-words`}>
            "{description}"
          </p>
        ) : (
          <p className="text-lg leading-snug font-medium text-gray-400 break-words">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}