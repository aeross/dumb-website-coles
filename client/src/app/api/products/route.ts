import Product, { ProductModel } from "@/db/models/product";
import User from "@/db/models/user";
import { NextResponse } from "next/server";

// type def for API response
type APIResponse<T> = {
    status: number;
    message?: string;
    data?: T;
    error?: string;
};

// GET /api/users
export const GET = async () => {
    const data = await Product.getProducts();
    return Response.json(
        // data sent to client
        { data, message: "Hello from GET /api/products!" },
        // additional info (status code, headers, etc)
        { status: 200 } // default 200 
    );
};