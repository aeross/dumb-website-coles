"use client"
import { ObjectId } from 'mongodb';
import { useRouter } from 'next/navigation';
import React from 'react'

function RemoveFromWishlist({ productId }: { productId: ObjectId | string }) {
    const router = useRouter();

    async function removeFromWishlist() {
        const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/wishlist", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId })
        });

        if (res.ok) router.refresh();
    }

    return (
        <button id="input-buy" onClick={removeFromWishlist}>Remove</button>
    )
}

export default RemoveFromWishlist