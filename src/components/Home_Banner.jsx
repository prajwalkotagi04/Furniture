import React, { useState } from 'react';
import { banner, banner1,  luxuru_sofa } from '../assets/images';

export default function Home_Banner() {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between px-20 py-16 bg-[#EBEAEA]">
                {/* Left side - Text */}
                <div className="max-w-lg space-y-6">
                    <h4 className="text-4xl font-bold">New Arrival</h4>
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Premium Lounge Sofa Chair
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        We offer you an extremely comfortable lounge sofa chair. Taking the
                        time to relax at home or the office will be more appealing than ever
                        when you choose a modern lounge sofa chair.
                    </p>
                    <button className="px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition">
                        Let's Shop Now
                    </button>
                </div>

                <div
                    className="relative  mt-10 md:mt-0 overflow-hidden rounded-2xl"
                    onMouseEnter={() => setHovered(true)}
                >
                    <img
                        src={hovered ? banner1 : banner}
                        className="inset-0 w-full h-full object-cover transition-opacity duration-700"
                        alt="Banner"
                    />
                </div>

            </section>
            <section className='  px-20 bg-[#EBEAEA] pb-30 pt-20'>
                <div className='grid-cols-4 grid py-8 border-white px-8 bg-white rounded-2xl'>
                    <div className='flex w-70 gap-3'>
                        <img src={luxuru_sofa} alt="sofa" className='w-20' />
                        <div className='mt-4'>
                            <h3>Luxury Sofa Set</h3>
                            <p>26 Products</p>
                        </div>
                    </div>

                    <div className='flex w-70 gap-3'>
                        <img src={luxuru_sofa} alt="sofa" className='w-20' />
                        <div className='mt-4'>
                            <h3>Luxury Sofa Set</h3>
                            <p>26 Products</p>
                        </div>
                    </div>
                    <div className='flex w-70 gap-3'>
                        <img src={luxuru_sofa} alt="sofa" className='w-20' />
                        <div className='mt-4'>
                            <h3>Luxury Sofa Set</h3>
                            <p>26 Products</p>
                        </div>
                    </div>
                    <div className='flex w-70 gap-3'>
                        <img src={luxuru_sofa} alt="sofa" className='w-20' />
                        <div className='mt-4'>
                            <h3>Luxury Sofa Set</h3>
                            <p>26 Products</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
