"use client";

import { useEffect, useState } from "react";
import Banner from "@/components/banner";

interface Banner {
  id: string;
  label: string;
  imageUrl: string;
  // Add other properties as needed
}

const BannerCarousel = ({ banners }: { banners: Banner[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${banner.imageUrl})`, backgroundSize: 'cover', borderRadius: '5px' }}
        >
          <Banner data={banner} />
        </div>
      ))}
    </div>
  );
};

export default BannerCarousel;