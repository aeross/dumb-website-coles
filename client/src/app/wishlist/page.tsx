import React from 'react'
import Card from '../(components)/CardProduct'
import Footer from '../(components)/Footer'
import { APIResponse } from '../api/responseTypeDef';
import { ProductModel } from '@/db/models/product';
import Link from 'next/link';
import { revalidatePath } from "next/cache";
import { cookies } from 'next/headers';

async function Wishlist() {
    const res: Response = await fetch("http://localhost:3000/api/wishlist", {
        headers: { Cookie: cookies().toString() }
    });
    const resJson: APIResponse<ProductModel[]> = await res.json();
    const products = resJson.data;
    let data = true;
    if (!products || products.length <= 0) {
        data = false;
    }

    // revalidatePath("/wishlist");

    return (<>
        <h1 className="heading-sm">Your wishlists</h1>
        <div className="grid grid-cols-5 gap-5 py-4 px-12">
            { data
            ? 
                products?.map(prod => {
                    return <Card key={prod.slug} wishlist={true} product={prod} />
                })
            :
                (<>
                    <p className="col-span-3">Wow, such empty...</p>
                    <p className="col-span-3">How about you&nbsp;
                        <Link href="/products" className="hover:text-red-600 underline hover:no-underline">
                            add
                        </Link>
                    &nbsp;a product into your wishlist?</p>
                </>)
            }
        </div>
    </>)
}

export default Wishlist