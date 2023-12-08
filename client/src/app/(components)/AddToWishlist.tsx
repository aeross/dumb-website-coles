"use client"
import { ObjectId } from 'mongodb'
// import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import React from 'react'

function AddToWishlist({ productId }: { productId: ObjectId | string }) {
    const router = useRouter();

    async function addToWishlist() {
        const response: Response = await fetch("http://localhost:3000/api/wishlist", {
            method: "POST",
            body: JSON.stringify({ productId })
        })
        if (response.ok) {
            // revalidatePath("/wishlist");  // server-side re-fetch data
            router.push("/wishlist");
            router.refresh();  // client-side re-fetch data
        } else {
            if (response.status === 401) {
                router.push("/login");
            }
        }
    }
    

    return (
        <button id="input-submit" className="w-40 mb-2" onClick={addToWishlist}>
            Add to Wishlist
        </button>
    )
}

export default AddToWishlist