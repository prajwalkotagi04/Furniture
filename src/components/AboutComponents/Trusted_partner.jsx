import React from 'react'
import { hands, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12 } from '../../assets/images'



export default function Trusted_partner() {

    return (
        <>
            <div className='justify-center text-center items-center mt-20'>
                <img src={hands} alt="hands" className='w-10  mx-auto' />
                <h3 className='text-2xl my-2'>Trusted Partner</h3>
                <p className='max-w-lg text-center justify-center mx-auto'>Count on our trusted partnerships to deliver excellence. Collaborating with industry leaders ensures top-quality products.</p>
            </div>
            <div className='flex mb-20'>
                <marquee behavior="smooth" direction="left" loop="infinite" >
                    <div className='flex mx-auto gap-10'>
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                        <img src={partner4} alt="" />
                        <img src={partner5} alt="" />
                        <img src={partner6} alt="" />
                        <img src={partner7} alt="" />
                        <img src={partner8} alt="" />
                        <img src={partner9} alt="" />
                        <img src={partner10} alt="" />
                        <img src={partner11} alt="" />
                        <img src={partner12} alt="" />
                    </div>
                </marquee>
            </div>
            
        </>
    )
}
