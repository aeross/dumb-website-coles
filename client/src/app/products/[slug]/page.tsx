import Footer from '@/app/components/Footer';
import Nav from '../../components/Nav';
import React from 'react'


async function ProductDetail({ params }: { params: { slug: string } }) {

    // request to backend: find product by id
    const slug = params.slug;
    const response = await fetch(`http://localhost:3000/api/products/${slug}`);
    const responseJson = await response.json();
    const data = responseJson.data;


    return (<>
    <Nav />

    <div className="my-12 mx-24">
        <div className="grid grid-cols-2 gap-10">
            <div>
                <img 
                    src={data.images ? data.images[0] : "-"} 
                    alt="product image" 
                    className="h-[300px] w-full object-cover rounded-xl"
                />
            </div>
            <div>
                <h2>{data.name}</h2>
                <p>{data.price}</p>
                <p>{data.excerpt}</p>
                <p>{data.tags}</p>

                <button id="input-submit">Add to Wishlist</button>
            </div>
        </div>

        <div className="w-[800px]">
            <h3 className="text-bold text-xl pb-6 pt-9">Product Details</h3>
            <p>{data.description}</p>
        </div>
    </div>

    <Footer />
    </>)
}

export default ProductDetail