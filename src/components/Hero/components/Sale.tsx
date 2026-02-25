"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Sale() {
  const [phoneImages, setPhoneImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhoneImages = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/smartphones",
        );
        const data = await response.json();
        const images =
          data.products?.map((product: any) => product.thumbnail) || [];
        setPhoneImages(images);
      } catch (error) {
        console.error("Error fetching phone images:", error);
        setPhoneImages([
          "https://picsum.photos/seed/phone1/200/200",
          "https://picsum.photos/seed/phone2/200/200",
          "https://picsum.photos/seed/phone3/200/200",
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoneImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full h-full px-2"
      >
        {phoneImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100px] flex items-center justify-center p-2 group/sale bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs transition-all hover:bg-white/20">
              <Image
                src={image}
                alt={`Phone ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 15vw"
                className="object-contain p-2 drop-shadow-lg transition-transform duration-500 group-hover/sale:scale-115"
              />
              <div className="absolute top-1 right-1">
                <span className="bg-red-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md shadow-lg animate-pulse">
                  HOT
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sale;
