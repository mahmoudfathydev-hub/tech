import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="py-20 flex justify-center items-center h-screen">
            <div className="w-12 h-12 border-4 border-[#2384eb]/20 border-t-[#2384eb] rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
