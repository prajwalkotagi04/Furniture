import React, { useState } from 'react'
import { blog1, latest_product, shop1, shop2, shop3, shop4 } from '../../assets/images'
import Card from './Card';
import { useParams } from 'react-router-dom';
import products from '../../Json/Latest_Product_Json';



export default function SingleProduct() {
    const [tab, settab] = useState('description');
    const [imagechange, setimagechange] = useState(shop1);
    const { id } = useParams();
    const product = products.find((p)=>p.id === parseInt(id));

    if(!product){
        return <h2>Product Not Found</h2>
    }
    const tabdata = (tab) => {
        tab
    }

    const images = [shop1, shop2, shop3]

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-15 pt-30 pb-10 px-20'>
                <div className="w-full relative flex">

                    <img src={imagechange} alt="" className="w-[72%]" />


                    <div className="absolute right-[20px] top-0 flex flex-col gap-2">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setimagechange(img)}
                                className="w-[150px] h-auto cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                <div className='gap-2 leading-8'>
                    {/* <h2 className='text-5xl font-bold'>Creating a Cozy Living Room Atmosphere</h2> */}
                                        <h2 className='text-5xl font-bold'>{product.name}</h2>
                    <div className='flex gap-5 py-4'>
                        <h3 className='text-3xl font-bold line-through'>{product.original_price}</h3>
                        <h3 className='text-3xl font-bold text-orange-300'>{product.sale_price}</h3>
                    </div>

                    <p className='text-md text-justify'>{product.description}</p>
                    

                    <h5><b>SKU:</b> <span>{product.sku}</span></h5>
                    <h5><b>Category:</b> {product.category}</h5>
                    <h5><b>Color:</b> {product.details.colors + ' , '}</h5>
                    <div className='gap-5 flex my-5'>
                        <button className='px-13 py-3 border'>Enquire Now</button>
                        {/* <button className='px-13 py-3 border'>Add to Wishlist</button> */}
                    </div>
                </div>
            </div>
            <div className='w-full items-center justify-center px-30 pb-30'>
                <div className='flex  gap-5 py-12'>
                    <button className='border py-4 px-14' onClick={() => settab("description")}>Description</button>
                    <button className='border py-4 px-14' onClick={() => settab("review")}>Review</button>
                </div>
                <div>
                    {tab === "description" && (<div>
                        <p className='text-justify text-md'>Experience the epitome of relaxation with our Classic Relaxable Chair. Crafted with plush cushioning and ergonomic design, it offers unparalleled comfort for lounging or reading. Its timeless style seamlessly blends with any decor, while the sturdy construction ensures durability for years to come.</p>
                    </div>)}
                    {
                        tab === "review" && (
                            <div>
                                <Card />
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}
