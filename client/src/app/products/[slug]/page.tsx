import Footer from '@/app/(components)/Footer';
import Nav from '../../(components)/Nav';
import React from 'react'
import { APIResponse } from '@/app/api/responseTypeDef';
import { ProductModel } from '@/db/models/product';
import { toDollarFormat } from '@/helpers/toDollarFormat';
import AddToWishlist from '@/app/(components)/AddToWishlist';


async function ProductDetail({ params }: { params: { slug: string } }) {

    // request to backend: find product by id
    const slug = params.slug;
    const response: Response = await fetch(`http://localhost:3000/api/products/${slug}`);
    const responseJson: APIResponse<ProductModel> = await response.json();
    
    if (responseJson.error) {
        throw new Error(responseJson.error);
    }
    const data = responseJson.data;
    
    return (<>

    { data && (
        <div className="my-12 mx-24">
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <img 
                        src={data.images ? data.images[0] : "-"} 
                        alt="product image"
                        className="h-[300px] w-full object-cover rounded-xl"
                    />
                </div>
                <div className="flex flex-col justify-between">
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

                    <AddToWishlist productId={data._id} />
                </div>
            </div>

            <div className="w-[800px] pl-2">
                <h3 className="text-bold text-xl pb-6 pt-9">Product Details</h3>
                <p>{data.description}</p>
            </div>
        </div>
    ) }

    <Footer />
    </>)
}

export default ProductDetail