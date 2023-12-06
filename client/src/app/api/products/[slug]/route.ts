import Product from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../../responseTypeDef";

export const GET = async (
    _request: NextRequest,
    { params }: { params: { slug: string } },
) => {
    const slug = params.slug;

    const product = await Product.getProductBySlug(slug);
    if (!product) {
        return NextResponse.json<APIResponse<unknown>>({
            status: 404,
            error: "Data not found"
        })
    }

    return NextResponse.json<APIResponse<unknown>>({
        status: 200,
        message: `Hello from GET /api/products/${slug}!`,
        data: product,
    });
};