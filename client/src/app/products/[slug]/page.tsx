import React from 'react'
import { APIResponse } from '@/app/api/responseTypeDef';
import { ProductModel } from '@/db/models/product';
import { toDollarFormat } from '@/helpers/toDollarFormat';
import AddToWishlist from '@/app/(components)/AddToWishlist';
import { cookies } from 'next/headers';
import CarouselComponent from '../../(components)/Carousel';


async function ProductDetail({ params }: { params: { slug: string } }) {

    // request to backend: find product by id
    const slug = params.slug;
    const resProduct: Response = await fetch(`http://localhost:3000/api/products/${slug}`);
    const resProductJson: APIResponse<ProductModel> = await resProduct.json();
    
    if (!resProduct.ok) {
        throw new Error(resProductJson.error);
    }
    const data = resProductJson.data;
    
    // find if this product is already in user's wishlist
    let isInWishlist = false;
    const resWishlist: Response = await fetch("http://localhost:3000/api/wishlist", {
        headers: { Cookie: cookies().toString() }
    });
    const resWishlistJson: APIResponse<ProductModel[]> = await resWishlist.json();

    if (!resWishlist.ok) {
        throw new Error(resWishlistJson.error);
    }
    const wishlists = resWishlistJson.data?.map(product => product.slug);
    if (wishlists?.includes(slug)) isInWishlist = true;

    return (<>

    { data && (
        <div className="my-12 mx-24">
            <div className="grid grid-cols-2 gap-10">
                <CarouselComponent images={data.images} />
                <div className="flex flex-col justify-between ml-10">
                    <div>
                        <h2 className="text-bold text-xl pb-6 pt-2">{data.name}</h2>
                        <p className="py-2">{data.price ? toDollarFormat(data.price) : "price unavailable"}</p>
                        <p className="py-2">{data.excerpt}</p>

                        <div className="mt-4 mb-6">
                            { data.tags?.map(tag => (
                                <span key={tag} className="text-sm bg-red-800 text-pink-100 py-[5px] px-[10px] rounded-xl mr-2">
                                    {tag}
                                </span>
                            )) }
                        </div>
                    </div>

                    { isInWishlist 
                    ? 
                        <button className="w-44 mb-2 py-[8px] px-[18px] border-[1px] border-black rounded-[14px] cursor-not-allowed" disabled>
                            Added to Wishlist
                        </button> 
                    : 
                        <AddToWishlist productId={data._id} /> 
                    }
                </div>
            </div>

            <div className="w-[800px] pl-2">
                <h3 className="text-bold text-xl pb-6 pt-9">Product Details</h3>
                <p>{data.description}</p>
            </div>
        </div>
    ) }
    </>)
}

export default ProductDetail