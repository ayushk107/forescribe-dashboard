"use client";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { staggerContainer } from "./animations";

const featureData = [
  { 
    title: "Flatfile", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#FFF9F2]", 
    visualColor: "bg-[#FFDFC4]" 
  },
{ 
    title: "Ariana", 
    description: "We automatically resolve 25% of customer queries across desktop and mobile using intercom bots.", 
    isQuote: true, 
    cardColor: "bg-white", 
    visualColor: "bg-[#1E2952]" 
  },
{
 title: "Name Cheap", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#FEF2F0]",   
    visualColor: "bg-[#DE3723]"
  },
  { 
    title: "QB", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#EFF8E9]",   
    visualColor: "bg-[#2CA01C]"  
  },

 { 
    title: "ChatGPT", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#E0F2F1]",   
    visualColor: "bg-[#00A67E]" 
  },
  { 
    title: "Kate", 
    description: "We automatically resolve 25% of customer queries across desktop and mobile using intercom bots.", 
    isQuote: true, 
    cardColor: "bg-purple-50", 
    visualColor: "bg-purple-400" 
  },
  { 
    title: "Skype", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#E6F7FF]", 
    visualColor: "bg-[#00AFF0]"  
  },

  { 
    title: "Notion", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-300", 
    visualColor: "bg-black", 
    textColor: "text-[#11114E]"
  },
{ 
    title: "Andrew", 
    description: "We automatically resolve 25% of customer queries across desktop and mobile using intercom bots.", 
    isQuote: true, 
    cardColor: "bg-white", 
  
    visualColor: "bg-black" 
  },
  { 
  title: "Paul", 
  description: "We automatically resolve 25% of customer queries across desktop and mobile using intercom bots.", 
  isQuote: true, 
  cardColor: "bg-white",  
  visualColor: "bg-gray-600" 
},
  { 
    title: "Linear", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#F4F5F8]",    
    visualColor: "bg-[#5E6AD2]"  
  },

  { 
    title: "Canva", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#E0F7FA]",   
    visualColor: "bg-[#00C4CC]"  
  },
  { 
    title: "LinkedIn", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#F3F6F8]",   
    visualColor: "bg-[#0077B5]"   
  },
  { 
  title: "Jane Mary", 
  description: "We automatically resolve 25% of customer queries across desktop and mobile using intercom bots.", 
  isQuote: true, 
  cardColor: "bg-pink-50",  
  visualColor: "bg-pink-300" 
},

  { 
    title: "AWS", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-gray-200",    
    visualColor: "bg-[#232F3E]"  
  },
  { 
    title: "Chimp Monk", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#FFFDE7]",   
    visualColor: "bg-[#FFC107]"  
  },
  { 
    title: "Figma", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#F5F5F5]",    
    visualColor: "bg-[#1E1E1E]"   
  },
 { 
    title: "Dropbox", 
    description: "Project Management", 
    isQuote: false, 
    cardColor: "bg-[#EFF7FF]",  
    visualColor: "bg-[#0061FF]"  
  },
];

export default function GridLayout() {
  const columns = [
    featureData.slice(0, 4),   
    featureData.slice(4, 7),   
    featureData.slice(7, 11),  
    featureData.slice(11, 14), 
    featureData.slice(14, 18), 
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      
      className="flex flex-row w-full gap-2 px-0"
    >
      {columns.map((columnItems, colIndex) => {
        const isStaggeredColumn = colIndex === 1 || colIndex === 3;
        
        return (
          <div 
            key={colIndex} 
           
            className={`flex-1 flex flex-col gap-2 ${isStaggeredColumn ? 'mt-[200px]' : ''}`}
          >
            {columnItems.map((feature, index) => (
              <motion.div key={index} variants={staggerContainer}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  isQuote={feature.isQuote}
                  cardColor={feature.cardColor}
                  visualColor={feature.visualColor}
                />
              </motion.div>
            ))}
          </div>
        );
      })}
    </motion.div>
  );
}