import React from 'react'
import Home_Banner from '../components/Home_Banner'
import Offer from '../components/Offer'
import Latest_product from '../components/Latest_product'
import Offers from '../components/Offers'
import Blog_card from '../components/Blog_card'
import MainLayout from '../layout/Mainlayout'

export default function Home() {
  return (
    <>
      <Home_Banner />
      <Offer />
      <Latest_product />
      <Offers />
      <Blog_card />
    </>
  )
}
