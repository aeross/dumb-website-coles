import Product from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

// type def for API response
type APIResponse<T> = {
    status: number;
    message?: string;
    data?: T;
    error?: string;
};

export const GET = async (
    _request: NextRequest,
    { params }: { params: { slug: string } },
) => {
    const slug = params.slug;

    const product = await Product.getProductBySlug(slug);

    return NextResponse.json<APIResponse<unknown>>({
        status: 200,
        message: `Hello from GET /api/products/${slug}!`,
        data: product,
    });
};