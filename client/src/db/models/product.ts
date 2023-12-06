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

export default class Product {
    static async getProducts() {
        const db = await getDb();

        const products = (await db.collection(COLLECTION_PRODUCT).find({}).toArray()) as ProductModel[];
        return products;
    }

    static async getProductBySlug(slug: string) {
        const db = await getDb();

        const product = (await db
            .collection(COLLECTION_PRODUCT)
            .findOne({ slug })) as ProductModel;
        return product;
    }
}