import { ObjectId } from "mongodb";
import { getDb } from "../config";

const COLLECTION_PRODUCT = "Products";

export type ProductModel = {
    _id: ObjectId,
    name: string,
    slug: string,
    description?: string,
    excerpt?: string,
    price?: number,
    tags?: string[],
    thumbnail?: string,
    images?: string[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

export type FetchProductOptions = {
    search?: string, 
    pagination?: { limit: number, page: number }
}

export default class Product {
    static async getProducts(input?: FetchProductOptions) {
        const db = await getDb();

        const options: { name?: { $regex: string | RegExp } } = {};
        if (input?.search) {
            const regex = new RegExp(input.search, "gi");
            options.name = { $regex: regex };
        }

        if (input?.pagination) {
            // validation for limit and page
            const { limit, page } = input.pagination;
            if (limit > 0 && page > 0) {
                const products = (await db
                    .collection(COLLECTION_PRODUCT)
                    .find(options)
                    .skip((page - 1) * limit)
                    .limit(limit)
                    .toArray()) as ProductModel[];
                return products;
            }
        }

        const products = (await db
            .collection(COLLECTION_PRODUCT)
            .find(options)
            .toArray()) as ProductModel[];
        return products;
    }

    static async getProductBySlug(slug: string) {
        const db = await getDb();

        const product = (await db
            .collection(COLLECTION_PRODUCT)
            .findOne({ slug })) as ProductModel;
        return product;
    }

    static async getProductById(id: string | ObjectId) {
        const db = await getDb();

        const product = (await db
            .collection(COLLECTION_PRODUCT)
            .findOne({ _id: new ObjectId(id) })) as ProductModel;
        return product;
    }
}