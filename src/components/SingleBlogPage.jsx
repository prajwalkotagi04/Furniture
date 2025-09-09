import React from 'react'
import { blog1 } from '../assets/images'
import { FaCheck, FaQuoteRight } from 'react-icons/fa'

export default function SingleBlogPage() {
    return (
        <>
            <div className=' my-10 flex  p-10'>
                <div className='w-[75%] h-[100%] px-10'>
                    <div className='flex gap-2 '>
                        <p className='px-5 py-1'>13th March, 2025</p>
                        <button className='bg-[#DACABD] px-5 py-1 rounded'>Interior</button>
                    </div>
                    <h1 className='text-4xl font-bold my-5'>The Importance of Choosing the Right Furniture</h1>
                    <p className='text-xl'>Jon Doue</p>
                    <img src={blog1} alt="" className='w-[100%] h-[20%] cover my-2' />
                    <div className='my-13 leading-9 text-md'>
                        <p className='my-5'>In the realm of home decor, where style meets functionality, Furnixar stands as a beacon of innovation and elegance. With a
                            commitment to quality craftsmanship and a keen eye for design, Furnixar products have the power to transform any living space
                            into a sanctuary of comfort and beauty. From cozy living rooms to serene bedrooms, Furnixar offers a diverse range of home decor
                            solutions that cater to every taste and lifestyle. Let's delve into some of the key elements that make Furnixar a frontrunner
                            in the world of home decor:
                        </p>
                        <h3 className='text-3xl my-3'>Main features of our product</h3>
                        <ul>
                            <li className='flex gap-2'><FaCheck className='text-md mt-2' /> All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.</li>
                            <li className='flex gap-2'><FaCheck className='text-md mt-2' />Adipiscing lobortis interdum fringilla euismod odio of this furniture.</li>
                            <li className='flex gap-2'><FaCheck className='text-md mt-2' />Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.</li>
                        </ul>
                        <p className='my-4'>Furnixar transcends the ordinary, offering home decor solutions that inspire and delight. With their dedication to craftsmanship,
                            timeless design, and sustainability, Furnixar invites you to elevate your home and create a space that truly reflects your lifestyle
                            and personality.Furnixar transcends the ordinary, offering home decor solutions that inspire and delight.</p>
                        <div className='flex gap-5 w-[100%] px-10 py-7 bg-[#F9F5F0]'>
                            <FaQuoteRight className='text-[#BB976D] text-6xl' />
                            <p className='text-2xl'>Nibh purus integer elementum in tellus vulputate habitasse of this is vulputate posuere habitant vel tempor varius.</p>
                        </div>
                        <h3 className='text-3xl py-5'>Main features of our product</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, beatae dolore! Facere, neque perspiciatis laudantium adipisci fugit
                            sequi nemo illum!</p>
                        <div className='ml-4'>
                            <ul className='list-decimal'>
                                <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet</li>
                                <li>Adipiscing lobortis interdum fringilla euismod odio of this furniture.</li>
                                <li>Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.</li>
                            </ul>
                        </div>

                        <p className='my-2'>All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar
                            elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut vulputate posuere habitant vel tempor varius.</p>
                    </div>

                    <div className='flex my-5'>
                        <h3 className='text-xl font-bold'>Tag:</h3>
                        <p className='px-4 border mx-4 rounded-sm'>Chair</p>
                        <p className='px-4 border rounded-sm'>Arts & Paint</p>
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2 my-8'>
                        <div className='my-3'>
                            <h2 className='text-xl tracking-[.5em] my-4'>PREV POST</h2>
                            <div className='flex'>
                                <img src={blog1} alt="" className='w-[25%]' />
                                <div className='block px-4'>
                                    <div className='flex gap-3'>
                                        <p className='py-1'>19th June 2025</p>
                                        <button className='bg-[#DACABD] px-5  rounded'>Interior</button>
                                    </div>
                                    <div className='my-5'>
                                        <p className='text-xl'>Consectetur purus habitasse ut diam habitant varius.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <h2 className='text-xl tracking-[.5em] my-4'>PREV POST</h2>
                            <div className='flex'>
                                <img src={blog1} alt="" className='w-[25%]' />
                                <div className='block px-4'>
                                    <div className='flex gap-3'>
                                        <p className='py-1'>19th June 2025</p>
                                        <button className='bg-[#DACABD] px-5  rounded'>Interior</button>
                                    </div>
                                    <div className='my-5'>
                                        <p className='text-xl'>Consectetur purus habitasse ut diam habitant varius.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[25%] h-[100%]'>
                    <div className='bg-gray-100 py-20 px-10 my-5'>
                        <h3 className='text-2xl font-bold'>Categories</h3>
                        <ul className='text-md leading-10 list-disc mx-3'>
                            <li>Chair</li>
                            <li>Table</li>
                            <li>Sofa Set</li>
                        </ul>
                    </div>
                    <div className='bg-gray-100 py-20 px-10 my-5'>
                        <h3 className='text-2xl font-bold'>Recent Posts</h3>
                        <ul>
                            <li>Auctor sit elementum habitant vel tempor varius.</li>
                            <li>Consectetur purus habitasse ut diam habitant varius.</li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}
