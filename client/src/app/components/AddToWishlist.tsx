"use client"

import { ObjectId } from 'mongodb'
import React from 'react'

function AddToWishlist({ productId }: { productId: ObjectId }) {
    async function addToWishlist() {
        const response: Response = await fetch("http://localhost:3000/api/wishlist", {
            method: "POST",
            body: JSON.stringify({ productId })
        })
        const responseJson = await response.json();
    }

    return (
        <button id="input-submit" className="w-40 mb-2" onClick={addToWishlist}>
            Add to Wishlist
        </button>
    )
}

export default AddToWishlist