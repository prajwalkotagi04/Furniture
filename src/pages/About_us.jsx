import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Navbar from '../components/Navbar'
import Ourstory from '../components/AboutComponents/Ourstory'
import Whyyouchoose from '../components/AboutComponents/Whyyouchoose'
import VideoSection from '../components/AboutComponents/VideoSection'
import Trusted_partner from '../components/AboutComponents/Trusted_partner'

export default function About_us() {
    return (
        <>
            <Breadcrumb page="About us" />
            <Ourstory />
            <Whyyouchoose />
            <VideoSection />
            <Trusted_partner />
        </>
    )
}
