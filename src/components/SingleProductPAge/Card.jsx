import React from 'react'
import latest_product from '../../Json/Latest_Product_Json'

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latest_product.slice(0, 2).map((product) =>
          product.reviews.map((review, index) => (
            <div key={`${product.id}-${index}`} className="shadow-md rounded-2xl p-6">
              <h3 className="text-lg font-bold">{review.user}</h3>
              <h5 className="text-yellow-600">Rating: {review.rating}</h5>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </>
  )
}
