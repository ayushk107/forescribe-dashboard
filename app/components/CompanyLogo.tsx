"use client";
import React from 'react';
import Image from 'next/image';

interface CompanyLogoProps {
  company: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CompanyLogo({ company, size = 'md' }: CompanyLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-32 h-32' 
  };

  if (company === "Flatfile") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image src="/flatfile-logo.png" alt="Flatfile Logo" fill className="object-contain" />
      </div>
    );
  }

  if (company === "ChatGPT") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image src="/chatgpt-logo.png" alt="ChatGPT Logo" fill className="object-contain" />
      </div>
    );
  }

  if (company === "Notion") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/notion-logo.png"
          alt="Notion Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "Canva") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/cnvv.png" 
          alt="Canva Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "AWS") {
    return (
      <div className="w-60 h-44 relative flex items-end justify-center overflow-hidden rounded-xl shadow-md mt-auto mb-2">
        <Image 
          src="/aw.jpg" 
          alt="AWS Logo"
          fill 
          className="object-contain p-2" 
        />
      </div>
    );
  }

  if (company === "Kate") {
    return (
      <div className="w-46 h-44 relative flex items-end justify-center overflow-hidden rounded-xl shadow-md mt-auto mb-2">
        <Image 
          src="/kate.png"
          alt="Kate"
          fill
          className="object-cover object-center" 
        />
      </div>
    );
  }

  if (company === "Ariana") {
    return (
      <div className="w-full h-full relative flex items-end justify-center overflow-hidden rounded-2xl">
        <Image 
          src="/ariana-logo.png" 
          alt="Ariana"
          fill
          className="object-cover object-bottom" 
        />
      </div>
    );
  }

  if (company === "Andrew") {
    return (
      <div className="w-32 h-40 relative flex items-end justify-center overflow-hidden rounded-xl shadow-md mt-auto mb-2">
        <Image 
          src="/adrw.jpg" 
          alt="Andrew"
          fill
          className="object-cover object-center" 
        />
      </div>
    );
  }

  if (company === "LinkedIn") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/linn.webp" 
          alt="LinkedIn Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "Chimp Monk") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/chimp-monk-logo.webp" 
          alt="Chimp Monk Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "Name Cheap") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/ncc.png" 
          alt="Namecheap Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "Skype") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/skype-logo.jpg" 
          alt="Skype Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "Paul") {
    return (
      <div className="w-66 h-44 relative flex items-end justify-center overflow-hidden rounded-xl shadow-md mt-auto mb-2">
        <Image 
          src="/paul.jpg" 
          alt="Paul"
          fill
          className="object-cover object-center" 
        />
      </div>
    );
  }

  if (company === "Figma") {
    return (
      <div className="w-60 h-43 relative flex items-end justify-center overflow-hidden rounded-xl shadow-md mt-auto mb-2">
        <Image 
          src="/fig-logo.jpg" 
          alt="Figma Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "QB") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/qb-logo.webp" 
          alt="QuickBooks Logo"
          fill 
          className="object-contain p-2" 
        />
      </div>
    );
  }

  if (company === "Linear") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/linear-logo.png" 
          alt="Linear Logo"
          fill 
          className="object-contain" 
        />
      </div>
    );
  }

  if (company === "Dropbox") {
    return (
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image 
          src="/dropbox-logo.png" 
          alt="Dropbox Logo"
          fill 
          className="object-contain p-1" 
        />
      </div>
    );
  }

  if (company === "Jane Mary") {
    return (
      <div className="w-32 h-40 relative flex items-end justify-center overflow-hidden rounded-xl shadow-md mt-auto mb-2">
        <Image 
          src="/jane-mary.jpg" 
          alt="Jane Mary"
          fill
          className="object-cover object-center" 
        />
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <div className={`${sizeClasses[size]} bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-xl`}>
      {getInitials(company)}
    </div>
  );
}