"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Truck, Zap, MapPin } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const deliveryItems = [
  {
    icon: <Truck size={48} />,
    text: "Free Delivery on Orders Over $250",
    bgGradient: "from-green-600 to-emerald-700",
  },
  {
    icon: <Zap size={48} />,
    text: "Express Delivery Available",
    bgGradient: "from-blue-600 to-indigo-700",
  },
  {
    icon: <MapPin size={48} />,
    text: "Track Your Order in Real-Time",
    bgGradient: "from-purple-600 to-pink-700",
  },
];

function Delivery() {
  return (
    <div className="delivery-swiper-wrapper h-full w-full rounded-3xl overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "delivery-swiper-bullet",
          bulletActiveClass: "delivery-swiper-bullet-active",
        }}
        loop={true}
        speed={600}
        className="h-full w-full"
      >
        {deliveryItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`h-full w-full bg-linear-to-br ${item.bgGradient} flex items-center justify-center`}
            >
              <div className="flex flex-col items-center gap-4 text-white">
                <div className="text-white">{item.icon}</div>
                <span className="text-xl font-semibold text-center px-4">
                  {item.text}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .delivery-swiper-wrapper .swiper {
          height: 100%;
          width: 100%;
        }
        .delivery-swiper-wrapper .swiper-slide {
          height: 100% !important;
        }
        .delivery-swiper-wrapper .swiper-pagination {
          bottom: 16px !important;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 20;
        }
        .delivery-swiper-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .delivery-swiper-bullet:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .delivery-swiper-bullet-active {
          background: rgba(255, 255, 255, 0.9) !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

export default Delivery;
