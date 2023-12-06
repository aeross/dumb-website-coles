import { ObjectId } from "mongodb";
import { getDb } from "../config";
import BcryptHelper from "../../helpers/bcrypt";

const COLLECTION_USER = "Users";

// defines the type for UserModel (complete)
export type UserModel = {
    _id: ObjectId;
    name?: string;
    username: string;
    email: string;
    password: string;
};

// defines the type for UserModelCreateInput (without _id)
// export type UserModelCreateInput = Omit<UserModel, "_id">;


// Model User -- CRUD
export default class User {
    static async getUsers() {
        const db = await getDb();

        const users = (await db
            .collection(COLLECTION_USER)
            .find({})
            .project({ password: 0 })
            .toArray()) as UserModel[];
        
        return users;
    }
}