import Wishlist from "@/db/models/wishlist";
import { WishlistModel } from "@/db/models/wishlist";
import { NextResponse } from "next/server";
import { APIResponse } from "../responseTypeDef";

// POST create new wishlist
export const POST = async (request: Request) => {
    // extract data sent by client
    const data = await request.json();

    // console.log(data);

    return NextResponse.json<APIResponse<unknown>>({
        status: 201,
        message: "Hello from POST /api/wishlist!",
        data
    })
}