"use client"
import React, { useEffect, useState } from 'react'
import Search from '../(components)/Search'
import Pagination from '../(components)/Pagination'
import { ProductModel } from '@/db/models/product'

import { revalidatePath } from "next/cache";
import { APIResponse } from '../api/responseTypeDef'
import { cookies } from 'next/headers'
import Cards from '../(components)/CardsProduct'

function Products() {
    
    // const response: Response = await fetch("http://localhost:3000/api/products");
    // const responseJson: APIResponse<ProductModel[]> = await response.json();
    // const data = responseJson.data;

    const [data, setData] = useState<ProductModel[] | null>(null);
    useEffect(() => {
        (async () => {
            const response: Response = await fetch("http://localhost:3000/api/products");
            const responseJson: APIResponse<ProductModel[]> = await response.json();
            console.log(responseJson.data);
            responseJson.data ? setData(responseJson.data) : null;
        })();
    }, []);
    
    // if the data on the server has changed, uncomment this code below
    // revalidatePath("/products");

    return (<>
        <div className="flex justify-center pt-4"><Search /></div>

        <h1 className="heading-sm">Products</h1>
        {/* { data && (
            <div className="grid grid-cols-5 gap-6 py-4 px-12">
                { data.map(d => {
                    return <Card key={d.slug} wishlist={false} product={d} />
                }) }
            </div>
        ) } */}

        { data && <Cards data={data} /> }
        
        <Pagination />
    </>)
}

export default Products