import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/CardProduct'
import Footer from '../components/Footer'
import { WishlistModel } from '@/db/models/wishlist';
import { APIResponse } from '../api/responseTypeDef';
import { ProductModel } from '@/db/models/product';
import Link from 'next/link';

async function Wishlist() {
    const resWishlist: Response = await fetch("http://localhost:3000/api/wishlist");
    const resJsonWishlist: APIResponse<WishlistModel[]> = await resWishlist.json();
    const wishlist = resJsonWishlist.data;

    const resProducts: Response = await fetch("http://localhost:3000/api/products");
    const resJsonProducts: APIResponse<ProductModel[]> = await resProducts.json();
    const products = resJsonProducts.data;

    let data: ProductModel[] = [];
    if (wishlist && products) {
        console.log(wishlist);
        console.log(products);
    }

    return (<>
        <Nav authenticated={true} />
        <h1 className="heading-sm">Your wishlists</h1>
        <div className="grid grid-cols-5 gap-5 py-4 px-12">
            { data.length === 0 
            ? 
                (<>
                    <p className="col-span-3">Wow, such empty...</p>
                    <p className="col-span-3">How about you&nbsp;
                        <Link href="/products" className="hover:text-red-600 underline hover:no-underline">
                            add
                        </Link>
                    &nbsp;a product into your wishlist?</p>
                </>)
            : 
                data.map(d => {
                    return <Card key={d.slug} wishlist={true} product={d} />
                }) 
            }
        </div>
        <Footer />
    </>)
}

export default Wishlist