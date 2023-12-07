"use client"
import React from 'react'
import Card from './CardProduct'
import { revalidatePath } from 'next/cache';
import { ProductModel } from '@/db/models/product';

function Cards(
    { data }: 
    { data: ProductModel[] }
) {
    // revalidatePath("/products");

    return (<>
        { data && (
            <div className="grid grid-cols-5 gap-6 py-4 px-12">
                { data.map(d => {
                    return <Card key={d._id.toString()} wishlist={false} product={d} />
                }) }
            </div>
        ) }
    </>)
}

export default Cards