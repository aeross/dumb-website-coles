import Link from 'next/link'
import React from 'react'

// a card for Products data
function Card({ product }: {product: Product}) {
    return (<>
<div>
    <div className="rounded-xl hover:border-2 hover:shadow-md hover:bg-slate-100 bg-slate-50 h-full flex flex-col justify-between">
        <Link href="/products" className="hover:cursor-pointer">
            <div>
                <img src={product.thumbnail} alt="image" className="rounded-t-lg" />
            </div>
            <div className="m-2">
                <h2 className="text-bold">{product.name}</h2>
                <p className="text-md">{product.price}</p>
                <p className="text-sm">{product.tags}</p>
            </div>
        </Link>
        <Link href={`/products/${product.slug}`} className="m-2"><button id="input-buy">click me</button></Link>
    </div>
</div>
    </>)
}

export default Card