import { ProductModel } from '@/db/models/product'
import { toDollarFormat } from '@/helpers/toDollarFormat'
import Link from 'next/link'
import React from 'react'

// a card for Products data
function Card(
    { product, wishlist }: 
    { product: ProductModel, wishlist: boolean }
) {
    return (<>
<div>
    <div className="card-component rounded-xl hover:border-2 hover:shadow-md hover:bg-slate-50 h-full flex flex-col justify-between">
        <div>
            <div>
                <img src={product.thumbnail} alt="image" className="rounded-t-lg h-56 object-cover" />
            </div>
            <div className="m-2">
                <Link href={`/products/${product.slug}`} className="hover:cursor-pointer">
                    <h2 className="text-bold hover:underline">{product.name}</h2>
                </Link>
                <p className="text-md">{product.price ? toDollarFormat(product.price) : "price unavailable"}</p>
            </div>
        </div>
        { !wishlist && <Link href={`/products/${product.slug}`} className="m-2"><button id="input-buy">buy now</button></Link> }
        { wishlist && <Link href="/" className="m-2"><button id="input-buy">remove</button></Link> }
    </div>
</div>
    </>)
}

export default Card