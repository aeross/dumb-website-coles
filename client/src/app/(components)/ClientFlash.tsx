"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

function ClientFlash() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (<>
        { error && <p className="text-xs text-bold text-red-800">{error}</p> }
    </>)
}

export default ClientFlash