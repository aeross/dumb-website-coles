import Link from 'next/link'
import React from 'react'

// a card for Products data
function Card(
    { product, wishlist }: 
    { product: Product, wishlist: boolean }
) {
    return (<>
<div>
    <div className="rounded-xl hover:border-2 hover:shadow-md hover:bg-slate-50 h-full flex flex-col justify-between">
        <div>
            <div>
                <img src={product.thumbnail} alt="image" className="rounded-t-lg" />
            </div>
            <div className="m-2">
                <Link href={`/products/${product.slug}`} className="hover:cursor-pointer">
                    <h2 className="text-bold hover:underline">{product.name}</h2>
                </Link>
                <p className="text-md">{product.price}</p>
                <p className="text-sm">{product.tags}</p>
            </div>
        </div>
        { !wishlist && <Link href={`/products/${product.slug}`} className="m-2"><button id="input-buy">buy now</button></Link> }
        { wishlist && <Link href="/" className="m-2"><button id="input-buy">remove</button></Link> }
    </div>
</div>
    </>)
}

export default Card