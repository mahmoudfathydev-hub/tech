import {
    Smartphone,
    Laptop,
    Tablet,
    Headphones,
} from "lucide-react";

function RightSection() {
    const services = [
        {
            icon: Smartphone,
            title: "Smartphones",
            description:
                "Discover the latest smartphones with powerful performance and advanced cameras.",
        },
        {
            icon: Laptop,
            title: "Laptops",
            description:
                "High-performance laptops for work, gaming, and everyday productivity.",
        },
        {
            icon: Tablet,
            title: "Tablets",
            description:
                "Lightweight and versatile tablets perfect for entertainment and business.",
        },
        {
            icon: Headphones,
            title: "Accessories",
            description:
                "Premium accessories including headphones, chargers, cases, and smartwatches.",
        },
    ];

    return (
        <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-[#1c6fd1]">
                    Fast & Secure Delivery
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    We deliver your tech products quickly and safely. All orders are
                    carefully packed and shipped to ensure they arrive in perfect
                    condition.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">
                        New arrivals available now
                    </span>
                </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-[#1c6fd1]">
                    Our Categories
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg hover:bg-white transition-colors"
                        >
                            <div className="bg-[#1c6fd1]/20 p-2 rounded-lg">
                                <service.icon className="w-5 h-5 text-[#1c6fd1]" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RightSection;