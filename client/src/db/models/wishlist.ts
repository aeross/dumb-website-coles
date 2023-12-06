import { ObjectId } from "mongodb";
import { getDb } from "../config";

const COLLECTION_WISHLIST = "Wishlists"

export type WishlistModel = {
    _id: ObjectId,
    userId: ObjectId,
    productId: ObjectId,
    createdAt?: Date | string,
    updatedAt?: Date | string
}

export default class Wishlist {
    static async addWishlist(userId: ObjectId, productId: ObjectId) {
        const db = await getDb();

        const newData = { userId, productId, createdAt: new Date(), updatedAt: new Date() }
        await db.collection(COLLECTION_WISHLIST).insertOne(newData)
    }
}