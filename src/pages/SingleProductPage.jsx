import React from 'react'
import { blog1 } from '../assets/images'
import SingleProduct from '../components/SingleProductPAge/SingleProduct'
import Breadcrumb from '../components/Breadcrumb'
import RelatedProducts from '../components/SingleProductPAge/RelatedProducts'

export default function SingleProductPage() {
    return (
        <>
            <Breadcrumb page="shop" />
            <SingleProduct />
            <RelatedProducts />
        </>
    )
}
