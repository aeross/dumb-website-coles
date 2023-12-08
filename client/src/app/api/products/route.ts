import Product, { FetchProductOptions } from "@/db/models/product";

// GET /api/products
export const GET = async (request: Request) => {
    const url = new URL(request.url);

    let searchURL = url.searchParams.get("search");
    let pageURL = url.searchParams.get("page");
    let limitURL = url.searchParams.get("limit");
    let search: string | undefined, pagination: { page: number, limit: number } | undefined;
    if (searchURL) search = searchURL;
    if (pageURL && limitURL) {
        pagination = { page: Number(pageURL), limit: Number(limitURL) }
    }

    const input: FetchProductOptions = { search, pagination };
    const data = await Product.getProducts(input);
    return Response.json(
        { data, message: "Hello from GET /api/products!" },
        { status: 200 }
    );
};