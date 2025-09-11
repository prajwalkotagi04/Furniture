import React from 'react'
import { logo } from '../assets/images'
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from 'react-icons/io5';
import { TiHeartOutline } from 'react-icons/ti';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()
    const pages = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Gallery",
            path: "/gallery"
        },
        {
            name: "Shop",
            path: "/shop"
        },
        {
            name: "Blogs",
            path: "/blogs"
        },
        {
            name: "Contact",
            path: "/contact"
        },
    ]
    return (
        <>
            <div className='flex justify-between items-center-safe mx-10'>
                <div className='w-25'>
                    <img src={logo} alt="logo" />
                </div>
                <div className=''>
                    <ul className='flex gap-8'>
                        {pages.map((page) => (
                            <li onClick={() => navigate(page.path)} className='cursor-pointer'>{page.name}</li>
                        ))}
                        
                    </ul>
                </div>
                <div className='flex gap-7 mx-5'>
                    <ul>
                        <li>Enquire Now</li>
                    </ul>
                    {/* <MdOutlineShoppingCartCheckout className='size-5' />
                    <IoBagCheckOutline className='size-5' />
                    <TiHeartOutline className='size-5' /> */}

                </div>
            </div>
        </>
    )
}
