import React from 'react'
import { bglogo } from '../assets/images'

export default function Footer() {
  return (
    <footer className="bg-[#EBEAEA] pt-20 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-10 px-6">
        
        {/* Logo & Copyright */}
        <div>
          <img src={bglogo} alt="logo" className="w-[120px] mb-4" />
          <p className="text-sm text-gray-600">
            © 2025 Furniture. Developed by <span className="font-semibold">Prajwal Kotagi</span>
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-bold text-lg font-josefin mb-3">Subscribe Newsletter</h2>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2 bg-white"
          />
          <button className="bg-cyan-800 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
            Subscribe
          </button>
        </div>

        {/* Sitemap */}
        <div>
          <h2 className="font-bold mb-3">Sitemap</h2>
          <ul className="space-y-1 text-gray-700">
            <li>About</li>
            <li>Team</li>
            <li>Portfolio</li>
            <li>Clients</li>
            <li>Error</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h2 className="font-bold mb-3">Others</h2>
          <ul className="space-y-1 text-gray-700">
            <li>Shipping Method</li>
            <li>Payment Method</li>
            <li>My Account</li>
            <li>Coming Soon</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h2 className="font-bold mb-3">Shop</h2>
          <ul className="space-y-1 text-gray-700">
            <li>Shop</li>
            <li>Product Single</li>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="font-bold mb-3">Customer Service</h2>
          <ul className="space-y-1 text-gray-700">
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
