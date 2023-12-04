import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
<Link className="w-full py-10" href="/products">
    <img 
        className="h-[500px] w-full object-cover"
        src="https://www.coles.com.au/content/dam/coles/cusp/ways-to-shop/swap-a-box/hero-banner/swap-a-box-hero-banner-832x440.jpg" 
        alt="banner image"
    />
</Link>
    )
}

export default Banner