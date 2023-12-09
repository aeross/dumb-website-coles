"use client"
import React, { useEffect, useState } from 'react'
import { ProductModel } from '@/db/models/product'
import { APIResponse } from '../api/responseTypeDef'
import Cards from '../(components)/CardsProduct'
import { useSearchParams } from 'next/navigation'
import InfiniteScroll from 'react-infinite-scroll-component'

function Products() {
    const search = useSearchParams().get("search");

    const [data, setData] = useState<ProductModel[] | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const limit = 5;  // hard-coded
    console.log(process.env.NEXT_PUBLIC_URL);
    async function fetchProducts(
        search?: string | null,
        pagination?: { page: number, limit: number } | null,
        restart?: boolean
    ) {
        let url = process.env.NEXT_PUBLIC_URL + "/api/products?";
        if (search) url += `search=${search}`
        if (pagination) url += `&page=${pagination.page}&limit=${pagination.limit}`
    
        const response: Response = await fetch(url);
        const responseJson: APIResponse<ProductModel[]> = await response.json();
        let products = responseJson.data;

        
        if (products && products.length > 0) {
            // && !(search && pagination?.page === 1)
            if (data && !restart) {
                setData([...data].concat(products));
            } else {
                setData(products);
            }
        } else {
            setHasMore(false);
        }

        if (restart) {
            setPage(1);
            setHasMore(true);
        }
    }

    // initial fetch
    useEffect(() => {
        fetchProducts(search, { page: 1, limit }, true);
    }, [search]);

    // more fetch
    function fetchMoreData() {
        fetchProducts(search, { page: page + 1, limit });
        setPage(page + 1);
    }
    
    // if the data on the server has changed, uncomment this code below
    // revalidatePath("/products");

    return (<>
        <h1 className="heading-sm">Products</h1>

        { data && (
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4 className="m-4 text-sm">loading...</h4>}
            >
                <Cards data={data} />
            </InfiniteScroll>
        ) }
    </>)
}

export default Products