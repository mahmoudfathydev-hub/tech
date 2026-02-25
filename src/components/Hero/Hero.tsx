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
                        <div className="h-46 rounded-3xl bg-blue-800"></div>
                        <div className="h-46 rounded-3xl bg-green-800"></div>
                    </div>
                </div>
                <div data-aos="fade-up" className="mt-6 h-40 w-full rounded-3xl bg-amber-600"></div>
            </div>
        </main>
    );
}

export default Hero;