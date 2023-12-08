import Link from 'next/link'
import React from 'react'

function Banner() {
    return (<>
<Link className="w-full py-10" href="/products">
    <img 
        className="h-[500px] w-full object-cover"
        src="https://www.coles.com.au/content/dam/coles/cusp/ways-to-shop/swap-a-box/hero-banner/swap-a-box-hero-banner-832x440.jpg" 
        alt="banner image"
    />
</Link>

{/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide4" className="btn btn-circle">❮</Link>
      <Link href="#slide2" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide1" className="btn btn-circle">❮</Link>
      <Link href="#slide3" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide2" className="btn btn-circle">❮</Link>
      <Link href="#slide4" className="btn btn-circle">❯</Link>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide3" className="btn btn-circle">❮</Link>
      <Link href="#slide1" className="btn btn-circle">❯</Link>
    </div>
  </div>
</div> */}
    </>)
}

export default Banner