import Link from 'next/link'
import React from 'react'

// a card for Products data
function Card({ product }: {product: Product}) {
    return (<>
<div>
    <div className="border-2 rounded-xl hover:shadow-md bg-slate-50 h-full flex flex-col justify-between">
        <div>
            <div>
                <img src={product.thumbnail} alt="image" className="rounded-t-lg" />
            </div>
            <div className="m-2">
                <h2 className="text-bold">{product.name}</h2>
                <p className="text-md">{product.price}</p>
                <p className="text-sm">{product.tags}</p>
            </div>
        </div>
        <Link href="/login"><button className="bg-blue-200 px-4 py-2 m-2 rounded-md">click me</button></Link>
    </div>
</div>
    </>)
}

export default Card