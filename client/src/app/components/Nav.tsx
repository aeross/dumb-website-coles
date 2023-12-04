import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
<div className="w-full h-[64px] bg-slate-50 flex justify-between items-center sticky top-0 z-50 shadow-md p-4">
    {/* nav start */}
    <Link href="/">
        <img
            className="h-[35px] w-[100px]"
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Coles.png" 
            alt="coles logo"
        />
    </Link>

    {/* nav middle */}
    <div className="pr-16">
        
    </div>

    {/* nav end */}
    <div>
        links
    </div>
</div>
    )
}

export default Nav