"use client"
import React from 'react'
import Card from './CardProduct'
import { revalidatePath } from 'next/cache';
import { ProductModel } from '@/db/models/product';

function Cards(
    // the options param determines pagination -- for every value in options, 
    // 0 or undefined or any other invalid value means all data in 1 page
    { data, options }: 
    { data: ProductModel[], options?: { limit: number, page: number } }
) {
    // revalidatePath("/products");

    return (<>
        { data && (
            <div className="grid grid-cols-5 gap-6 py-4 px-12">
                { data.map((d, i) => {
                    if (options?.limit && options?.page && options.limit > 0 && options.page > 0) {
                        // pagination logic
                        const limit = options.limit;
                        const page = options.page;

                        const start = (page - 1) * limit;
                        const end = page * limit;
                        if (start <= i && i < end) {
                            return <Card key={d._id.toString()} wishlist={false} product={d} />
                        }
                    } else {
                        return <Card key={d._id.toString()} wishlist={false} product={d} />
                    }
                }) }
            </div>
        ) }
    </>)
}

export default Cards