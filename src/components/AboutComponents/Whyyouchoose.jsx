import React from "react";
import { fea1, fea2,fea3,fea4,fea5, like } from "../../assets/images";

export default function Whyyouchoose() {
    const data = [
        {
            id: 1,
            image: fea1,
            title: "Free Shipping",
            desc: "Enjoy free shipping on all orders, making your shopping experience even more convenient. Get your favorite products delivered."
        },
        {
            id: 2,
            image: fea2,
            title: "Easy to Return",
            desc: "Experience hassle-free returns with our easy-to-use return policy. If you're not satisfied, simply return your product for a quick."
        },
        {
            id: 3,
            image: fea3,
            title: "Secure Payment",
            desc: "Shop with confidence using our secure payment options, ensuring your personal information stays protected. We prioritize your safety."
        },
        {
            id: 4,
            image: fea4,
            title: "Customer Support",
            desc: "Our dedicated customer support team is here to assist you every step of the way. Reach out to us anytime for prompt, friendly help."
        },
        {
            id: 5,
            image: fea5,
            title: "Product QC Team",
            desc: "Our meticulous product QC team ensures every item meets our highest standards. Trust in quality assurance that goes beyond expectation."
        }
    ]
    return (
        <>
            <div className="flex flex-col items-center text-center px-6 py-12 max-w-2xl mx-auto">
                <img src={like} alt="Why Choose Us Icon" className="w-15 mb-4" />

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Why You Choose Us
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    Choose us for exceptional quality. We prioritize your satisfaction by
                    offering premium products and a seamless shopping experience.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 mx-20 gap-2 leading-8 mb-15">
                {
                    data.map((item) => (
                        <div key={item.id} className="w-60">
                            <img src={item.image} alt="" className="w-12 h-20" />
                            <h2 className="text-1xl font-bold">{item.title}</h2>
                            <p className="text-sm">{item.desc}</p>
                        </div>

                    ))
                }

            </div>
        </>
    );
}
