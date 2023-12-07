import { isAuthd } from "@/helpers/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import React from 'react'

function ClientAuth({ children }: { children: React.ReactNode }) {
    const token = isAuthd();
    if (!token) redirect("/login")

    return (<>
        { children }
    </>)
}

export default ClientAuth