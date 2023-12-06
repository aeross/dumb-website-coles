import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";

function Nav({ authenticated }: { authenticated: boolean }) {
    return (
<div className="w-full h-[76px] bg-slate-50 flex justify-between items-center sticky top-0 z-50 shadow-sm shadow-slate-300 py-4 px-12">
    {/* nav start */}
    <Link href="/">
        <img
            className="h-[40px] w-[110px]"
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Coles.png" 
            alt="coles logo"
        />
    </Link>


    {/* nav end */}
    
    <div className="flex flex-row justify-end gap-1">
    { authenticated 
    ?
        (<>
            <Link href="/wishlist" className="px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <FaClipboardList className="text-3xl p-1" />
                Wishlists
            </Link>
            <span className="px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <FaUser className="text-3xl p-1" />
                Log Out
            </span>
        </>) 
    :
        (<>
            <Link href="/wishlist" className="px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <IoLogIn className="text-3xl p-1" />
                Log In
            </Link>
            <Link href="/wishlist" className="px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <GiArchiveRegister className="text-3xl p-1" />
                Sign Up
            </Link>
        </>)
    }
    </div>
</div>
    )
}

export default Nav