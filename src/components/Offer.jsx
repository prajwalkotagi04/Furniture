import React from "react";
import { candil, tree } from "../assets/images.jsx";

export default function Offer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-[#F2F2F3] pb-20 md:pb-32">

            {/* Left Image */}
            <div className="flex justify-center">
                <img 
                    src={candil} 
                    alt="Decorative candil lamp" 
                    className="max-h-72 md:max-h-96 object-contain" 
                />
            </div>

            {/* Text Section */}
            <div className="text-center space-y-4 px-6 pt-20">
                <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900">45%</h1>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                    Hurry Up! It’s Only for Today
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                    Don&apos;t miss out on exclusive savings! Enjoy a massive{" "}
                    <span className="font-semibold text-gray-900">45% discount</span>, 
                    available for today only. Hurry, grab your deal before it&apos;s gone! 
                    This special offer won’t last long, so claim it while you can!
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition duration-300">
                    Claim Discount
                </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
                <img 
                    src={tree} 
                    alt="Decorative tree" 
                    className="max-h-72 md:max-h-96 object-contain" 
                />
            </div>
        </div>
    );
}
