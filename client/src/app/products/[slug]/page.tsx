import Nav from '../../components/Nav';
import React from 'react'


function ProductDetail({ params }: { params: { slug: string } }) {

    // request to backend: find product by id
    const data: Product = {
        "name": "cunabula caelestis volaticus",
        "slug": "suspendo-tenetur",
        "description": "Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro.\nAdinventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.",
        "excerpt": "Thorax saepe deficio adimpleo conitor.",
        "price": 5249399,
        "tags": ["trucido", "talio", "arceo"],
        "thumbnail": "https://loremflickr.com/400/400/nightlife",
        "images": [
            "https://loremflickr.com/400/400/abstract",
            "https://loremflickr.com/400/400/nightlife",
            "https://loremflickr.com/400/400/food",
            "https://loremflickr.com/400/400/transport",
            "https://loremflickr.com/400/400/food"
        ],
        "createdAt": "2023-12-15T15:32:06.350Z",
        "updatedAt": "2024-03-18T14:47:12.101Z"
        };
    // this above is the idiotic way, replace later


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

    <div>
        <h3>Product Details</h3>
        <p>{data.description}</p>
    </div>
</div>
    </>)
}

export default ProductDetail