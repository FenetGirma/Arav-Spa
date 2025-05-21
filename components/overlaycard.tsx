import React from 'react';
import Image from 'next/image';

const OverlayCard = () => {
  return (
    <div className=" relative w-60 h-64 rounded-xl border"> {/* Increased height to accommodate space */}
      {/* Glass Card Container with Full Border */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl flex flex-col">
        {/* Top Spacer */}
        <div className="h-4" /> {/* Adjust this value for more/less space */}
        
        {/* Image Section with Transparent Border */}
        <div className="relative h-[60%] "> {/* Reduced height percentage */}
          <Image
            src="/images/main.png"
            alt="Before treatment"
            fill
            className="object-contain rounded-t-xl"
          />
        </div>

        {/* Text Section */}
        <div className="relative h-[30%] flex items-center justify-center px-4">
          <div className="absolute left-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4CAF50">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </div>
          
          <div className="text-center w-full">
            <p className="text-xs font-medium mb-[2px]">After 3 months!</p>
            <p className="text-sm font-bold text-[#8ca889]">Glowing Skin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;