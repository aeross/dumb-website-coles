import Link from 'next/link'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { GiArchiveRegister } from "react-icons/gi";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { UserModel } from '@/db/models/user';
import Search from './Search';

async function Nav() {
    const res: Response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/users", {
        headers: { Cookie: cookies().toString() }
    });
    const auth = res.status === 200 ? true : false

    const resJson: UserModel | undefined = auth ? (await res.json()).data : undefined;

    return (
<div className="w-full h-[76px] bg-slate-50 flex justify-between items-center sticky top-0 z-50 shadow-sm shadow-slate-300 py-4 px-12">
    {/* nav start */}
    <Link href="/" className="w-[140px]">
        <img
            className="h-[40px] w-[110px]"
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Coles.png" 
            alt="coles logo"
        />
    </Link>

    {/* <div>
        { auth && (
            <p>Welcome back, <span className="text-bold">{resJson?.name ? resJson.name : "unknown"}</span></p>
        ) }
    </div> */}
    <div>
        <Search />
    </div>

    {/* nav end */}
    <div className="flex flex-row justify-end gap-1">
    { auth 
    ?
        (<>
            <Link href="/products" className="hover:text-red-700 px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <FaClipboardList className="text-3xl p-1" />
                Products
            </Link>
            <Link href="/wishlist" className="hover:text-red-700 px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <FaClipboardList className="text-3xl p-1" />
                Wishlist
            </Link>
            <form action={ async () => {
                "use server"
                cookies().get("token") && cookies().delete("token");
                redirect("/login");
            } }>
                <button 
                    className="hover:text-red-700 px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center"
                >
                    <FaUser className="text-3xl p-1" />
                    Log Out
                </button>
            </form>
        </>) 
    :
        (<>
            <Link href="/login" className="hover:text-red-700 px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
                <IoLogIn className="text-3xl p-1" />
                Log In
            </Link>
            <Link href="/register" className="hover:text-red-700 px-4 py-2 rounded-lg text-xs hover:bg-slate-100 hover:cursor-pointer hover:underline flex flex-col justify-center items-center">
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