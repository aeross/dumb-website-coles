import React from 'react'
import ClientAuth from '../(components)/ClientAuth'

function WishlistLayout({ children }: { children: React.ReactNode }) {
    return <ClientAuth>{ children }</ClientAuth>
}

export default WishlistLayout