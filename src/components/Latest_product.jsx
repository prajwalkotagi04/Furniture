import React from 'react'
import { latest_product } from '../assets/images'
import Products from './Products'

export default function LatestProduct() {
  return (
    <>
    <div className="flex flex-col items-center text-center py-20 px-6 bg-[#EBEAEA]">
    
      <img 
        src={latest_product} 
        alt="Latest product" 
        className="max-w-sm w-20 mb-6 rounded-xl"
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Latest Product
      </h2>

      <p className="text-gray-600 max-w-lg leading-relaxed">
        Be the first to experience innovation with our latest arrivals. 
        Stay ahead of the curve and discover what&apos;s new in style.
      </p>
    </div>
    <Products />
    </>

  )
}
