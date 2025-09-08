import React, { useState } from "react";
import { about_banner, about_banner2, about_banner3, ourstory } from "../../assets/images";

export default function Ourstory() {
    const [select, setselect] = useState(about_banner);
    const images = [about_banner, about_banner2, about_banner3]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-10 items-center bg-[#F8F9F8]">

            <div className="relative">

                <img
                    src={select}
                    alt="Main Banner"
                    className="w-full"
                />


                <div className="absolute top-15 right-[-3rem] flex flex-col gap-4">
                    {
                        images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Main Banner"
                                className="w-40"
                                onClick={() => setselect(img)}
                            />
                        ))
                    }


                </div>
            </div>


            <div className="leading-7 md:p-6">
                <img src={ourstory} alt="Our Story Logo" className="w-20 mb-4" />
                <h2 className="text-2xl font-bold py-2">Our Story Journey</h2>
                <p className="text-justify text-gray-700">
                    At FurnXar, our story is one of passion, craftsmanship, and a relentless pursuit of excellence.
                    It all began with a vision to redefine the way people experience furniture – not just as
                    functional pieces, but as expressions of personal style and comfort. Driven by a love for
                    design and a commitment to quality, we embarked on a journey to create furniture that
                    transcends trends and stands the test of time. Each piece in our collection tells a story
                    of meticulous attention to detail, from the selection of premium materials to the precision
                    of craftsmanship.
                </p>
                <p className="text-justify text-gray-700 mt-4">
                    Over the years, our dedication to innovation and customer satisfaction has fueled our growth
                    and earned us a reputation for excellence. From humble beginnings, we've grown into a trusted
                    name in the industry, known for delivering furniture that exceeds expectations.
                </p>
            </div>
        </div>
    );
}
