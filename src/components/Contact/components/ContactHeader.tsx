import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

function ContactHeader() {
    return (
        <div className="bg-white text-gray-900">
            <div className="container mx-auto px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#1c6fd1] transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#1c6fd1] p-3 rounded-lg">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-sm">Email</h3>
                                <p className="font-semibold text-[14px]">mahmoudfathy.dev@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#1c6fd1] transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#1c6fd1] p-3 rounded-lg">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-sm">Phone</h3>
                                <p className="font-semibold">+20 120 048 1281</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#1c6fd1] transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#1c6fd1] p-3 rounded-lg">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-sm">Location</h3>
                                <p className="font-semibold">Alex, Egypt</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#1c6fd1] transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className="bg-[#1c6fd1] p-3 rounded-lg">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-sm">Availability</h3>
                                <p className="font-semibold">Sat-Thu 9AM-9PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactHeader;
