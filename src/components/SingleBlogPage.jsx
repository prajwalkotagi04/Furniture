import React from 'react'
import { blog1 } from '../assets/images'

export default function SingleBlogPage() {
    return (
        <>
            <div className=' my-10 flex p-10'>
                <div className='w-[75%] px-10'>
                    <h1 className='text-3xl font-bold'>The Importance of Choosing the Right Furniture</h1>
                    <p className='text-xl'>Jon Doue</p>
                    <img src={blog1} alt="" className='w-[100%] h-[20%]' />
                    <div className='my-10 leading-7'>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                        <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                            "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                            "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.",
                            "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
                        </p>
                    </div>

                    <div className='flex my-5'>
                        <h3 className='text-xl font-bold'>Tag:</h3>
                        <p className='px-4 border mx-4 rounded-sm'>Chair</p>
                        <p className='px-4 border rounded-sm'>Arts & Paint</p>
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2'>
                        <div className=''>
                            <h2>PREV POST</h2>
                            <div className='flex'>
                                <img src={blog1} alt="" className='w-[20%]' />
                                <div className='block'>
                                    <div className='flex'>
                                        <p>19th June 2025</p>
                                        <button>Interior</button>
                                    </div>
                                    <div className=''>
                                        <p>Consectetur purus habitasse ut diam habitant varius.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h2>PREV POST</h2>
                            <div className='flex'>
                                <img src={blog1} alt="" className='w-[20%]' />
                                <div className='block'>
                                    <div className='flex'>
                                        <p>19th June 2025</p>
                                        <button>Interior</button>
                                    </div>
                                    <div className=''>
                                        <p>Consectetur purus habitasse ut diam habitant varius.</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[25%]'>
                    <div className=''>
                        <h3>Categories</h3>
                        <ul>
                            <li>Chair</li>
                            <li>Table</li>
                            <li>Sofa Set</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Recent Posts</h3>
                        <ul>
                            <li>Auctor sit elementum habitant vel tempor varius.</li>
                            <li>Consectetur purus habitasse ut diam habitant varius.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
