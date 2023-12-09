import Wishlist from "@/db/models/wishlist";
import { WishlistModel } from "@/db/models/wishlist";
import { NextResponse } from "next/server";
import { APIResponse } from "../responseTypeDef";
import Product from "@/db/models/product";

// GET all products in a logged-in user's wishlist
export const GET = async (request: Request) => {
    const userId = request.headers.get("x-user-id");
    const wishlists = (await Wishlist.getWishlists()).filter(wishlist => (
        wishlist.userId.equals(userId)
    ));
    const products = (await Product.getProducts()).filter(product => {
        let listedProd = false;
        wishlists.forEach(wishlist => {
            if (product._id.equals(wishlist.productId)) listedProd = true;
        })
        return listedProd;
    });

    return NextResponse.json<APIResponse<unknown>>({
        status: 200,
        data: products
    })
}

// POST create new wishlist
export const POST = async (request: Request) => {
    // extract data sent by client
    const { productId } = await request.json();
    const userId = request.headers.get("x-user-id");

    // ensure userId is valid
    if (!userId) {
        return NextResponse.json<APIResponse<unknown>>(
            { status: 401, error: "You must log in first" }, 
            { status: 401 }
        );
    }

    // ensure productId is valid
    const product = await Product.getProductById(productId);
    if (!product) {
        return NextResponse.json<APIResponse<unknown>>(
            { status: 400, error: "Invalid product id" },
            { status: 400 }
        )
    }

    const data = await Wishlist.addWishlist(userId, productId);

    return NextResponse.json<APIResponse<unknown>>({
        status: 201,
        message: "Hello from POST /api/wishlist!",
        data
    })
}

export const DELETE = async (request: Request) => {
    const { productId } = await request.json();
    const userId = request.headers.get("x-user-id");

    // ensure userId is valid
    if (!userId) {
        return NextResponse.json<APIResponse<unknown>>(
            { status: 401, error: "You must log in first" }, 
            { status: 401 }
        );
    }

    // ensure productId is valid
    const product = await Product.getProductById(productId);
    if (!product) {
        return NextResponse.json<APIResponse<unknown>>(
            { status: 400, error: "Invalid product id" },
            { status: 400 }
        )
    }

    const deleted = await Wishlist.deleteWishlist(userId, productId);
    return NextResponse.json<APIResponse<unknown>>(
        { status: 200, data: deleted },
        { status: 200 }
    )
}