import { ObjectId } from "mongodb";
import { getDb } from "../config";
import BcryptHelper from "../../helpers/bcrypt";  // for password hashing
import { ZodError, z } from "zod";  // for input validation

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

// defines input validation
const userInputSchema = z.object({
    name: z.string().optional(),
    username: z.string(),  // NOTE: also needs to be unique
    email: z.string().email(),
    password: z.string().min(5),
})


// Model User -- CRUD
export default class User {
    static async getUsers(): Promise<UserModel[]> {
        const db = await getDb();

        const users = (await db
            .collection(COLLECTION_USER)
            .find({})
            .project({ password: 0 })
            .toArray()) as UserModel[];
        
        return users;
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
                .findOne({ _id: new ObjectId(returnValFromInsertOne.insertedId) }) as UserModel

            // return newly registered user
            return newUser;
        } catch (error) {
            throw error;
        }
    }
}