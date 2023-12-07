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
    static async getWishlists() {
        const db = await getDb();

        return await db
            .collection(COLLECTION_WISHLIST)
            .find({})
            .toArray() as WishlistModel[];
        
    }

    static async addWishlist(userId: string | ObjectId, productId: string | ObjectId) {
        const db = await getDb();

        userId = new ObjectId(userId); productId = new ObjectId(productId);

        const newData = { userId, productId, createdAt: new Date(), updatedAt: new Date() }
        const inserted = await db.collection(COLLECTION_WISHLIST).insertOne(newData);
        const newWishlist = await db
            .collection(COLLECTION_WISHLIST)
            .findOne({ _id: inserted.insertedId }) as WishlistModel
        
        return newWishlist;
    }
}