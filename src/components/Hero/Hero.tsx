import Delivery from "./components/Delivery";
import Sale from "./components/Sale";
import HeroSwiper from "./components/Swiper";

function Hero() {
    return (
        <main className="p-4 sm:p-6 lg:p-10">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div
                        data-aos="fade-right"
                        className="h-[350px] sm:h-[450px] lg:h-100 w-full lg:w-3/4 rounded-3xl overflow-hidden">
                        <HeroSwiper />
                    </div>
                    <div
                        data-aos="fade-left"
                        className="flex flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-1/4">
                        <div className="h-48 sm:h-48 lg:h-68 flex-1 rounded-3xl overflow-hidden">
                            <Delivery />
                        </div>
                        <div className="h-24 sm:h-48 lg:h-25 flex-1 rounded-3xl bg-[#1c6fd1] overflow-hidden">
                            <Sale />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="mt-6 h-40 sm:h-64 w-full rounded-3xl bg-amber-600"></div>
            </div>
        </main>
    );
}

export default Hero;