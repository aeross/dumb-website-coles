import { ObjectId } from "mongodb";
import { getDb } from "../config";

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

const COLLECTION_PRODUCTS = "Products";

export default class Product {
    static async getProducts() {
        const db = await getDb();

        const products = await (db.collection(COLLECTION_PRODUCTS).find({}).toArray());
        return products;
    }

    static async getProductBySlug(slug: string) {
        const db = await getDb();

        const product = await (db
            .collection(COLLECTION_PRODUCTS)
            .findOne({ slug }));
        return product;
    }
}