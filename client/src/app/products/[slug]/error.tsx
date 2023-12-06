"use client"

import React from 'react'

function ProductDetailError({ error }: { error: Error }) {
    return (
        <h1>{error.name}: {error.message}</h1>
    )
}

export default ProductDetailError