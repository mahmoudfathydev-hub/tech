import Delivery from "./components/Delivery";
import Sale from "./components/Sale";
import HeroSwiper from "./components/Swiper";

function Hero() {
    return (
        <main className="p-10">
            <div className="container">
                <div className="flex gap-6">
                    <div 
                    data-aos="fade-right"
                    className="h-100 w-3/4 rounded-3xl">
                        <HeroSwiper />
                    </div>
                    <div 
                    data-aos="fade-left"
                    className="flex flex-col gap-6 w-1/4">
                        <div className="h-68 rounded-3xl">
                            <Delivery />
                        </div>
                        <div className="h-25 rounded-3xl bg-[#1c6fd1]">
                            <Sale />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="mt-6 h-64 w-full rounded-3xl bg-amber-600"></div>
            </div>
        </main>
    );
}

export default Hero;