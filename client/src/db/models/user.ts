import { ObjectId } from "mongodb";
import { getDb } from "../config";
import BcryptHelper from "../../helpers/bcrypt";  // for password hashing
import { z } from "zod";  // for input validation
import JWTHelper from "@/helpers/jwt";

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
export type UserModelCreateInput = Omit<UserModel, "_id">;

// defines the type for login input (email and password)
export type UserModelLoginInput = {
    email: string;
    password: string;
}

// defines the type for payload (user's login info)
export type UserPayload = Omit<UserModel, "password">


// defines input validation
const userInputSchema = z.object({
    name: z.string().optional(),
    username: z.string().min(1),  // NOTE: also needs to be unique
    email: z.string().email(),
    password: z.string().min(5),
})


// Model User -- CRUD
export default class User {
    static async getUserById(_id: string | ObjectId): Promise<UserModel> {
        const db = await getDb();

        const users = (await db
            .collection(COLLECTION_USER)
            .findOne(
                { _id: new ObjectId(_id) }, 
                { projection: { password: 0 } })
            ) as UserModel
        
        return users;
    }

    static async login(input: UserModelLoginInput): Promise<string> {
        try {
            const db = await getDb();

            // find user by email
            const user = await db.collection(COLLECTION_USER).findOne({ email: input.email }) as UserModel;
            if (!user) throw "Invalid credentials";

            // compare password with found user's hashed password
            const isValidPassword = BcryptHelper.compare(input.password, user.password);
            if (!isValidPassword) throw "Invalid credentials";

            const payload = {
                _id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
            }
            const token = JWTHelper.encode(payload);
            return token;
        } catch (error) {
            throw error;
        }
    }

    static async register(input: UserModelCreateInput): Promise<UserModel> {
        const db = await getDb();

        try {
            // validate input
            const parsedInput = userInputSchema.safeParse(input);
            const isNotUnique = await db
                .collection(COLLECTION_USER)
                .findOne({ username: input.username }, { projection: { password: 0 } });
            if (isNotUnique) throw new Error("username - Username must be unique")
            if (!parsedInput.success) throw parsedInput.error;
    
            // insert to database
            const hashedPassword = BcryptHelper.hash(input.password);
            const returnValFromInsertOne = await db.collection(COLLECTION_USER).insertOne({
                ...input,
                password: hashedPassword
            });
            const newUser = await db
                .collection(COLLECTION_USER)
                .findOne(
                    { _id: new ObjectId(returnValFromInsertOne.insertedId) },
                    { projection: { password: 0 } }
                ) as UserModel

            // return newly registered user
            return newUser;
        } catch (error) {
            throw error;
        }
    }
}