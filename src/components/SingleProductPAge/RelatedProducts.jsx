import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import latestproduct from '../../Json/Latest_Product_Json'

export default function RelatedProducts() {

    return (
        <>
            <div className='px-20 pb-10'><h1 className='text-4xl font-bold '>Latest Products</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 py-5 gap-10'>
                    {
                        latestproduct.slice(0, 4).map((item, index) => (
                            <div key={index}>
                                <Link to={`/product/${item.id}`}>
                                    <img src={item.image} alt='' />
                                    <h3 className='text-md font-bold py-3'>{item.name}</h3>
                                    <p>{item.description.slice(0, 70)}...</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
