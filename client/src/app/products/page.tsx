import React from 'react'
import Nav from '../(components)/Nav'
import Search from '../(components)/Search'
import Card from '../(components)/CardProduct'
import Pagination from '../(components)/Pagination'
import Footer from '../(components)/Footer'
import { ProductModel } from '@/db/models/product'

import { revalidatePath } from "next/cache";
import { APIResponse } from '../api/responseTypeDef'
import { cookies } from 'next/headers'

async function Products() {
    const response: Response = await fetch("http://localhost:3000/api/products", {
        headers: { Cookie: cookies().toString() }
    });
    const responseJson: APIResponse<ProductModel[]> = await response.json();
    const data = responseJson.data;
    
    // if the data on the server has changed, uncomment this code below
    revalidatePath("/products");

    return (<>
        <div className="flex justify-center pt-4"><Search /></div>

        { data && (
            <div className="grid grid-cols-5 gap-6 py-4 px-12">
                { data.map(d => {
                    return <Card key={d.slug} wishlist={false} product={d} />
                }) }
            </div>
        ) }
        
        <Pagination />
    </>)
}

export default Products