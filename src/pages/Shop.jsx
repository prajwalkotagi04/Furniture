import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Products from '../components/Products'

export default function Shop() {
  return (
    <>
      <Breadcrumb page="Shop" />
      <div className='py-20 bg-[#EBEAEA]'>
        <Products />
      </div>
    </>
  )
}
