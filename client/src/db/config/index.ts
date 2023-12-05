import { Db, MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined");
}
let client: MongoClient;

// get mongodb client instance
const getMongoClientInstance = async () => {
    if (!client) {
        client = await MongoClient.connect(connectionString);
        await client.connect();
    }
    
    return client;
};

// get database name
const DATABASE_NAME = process.env.MONGODB_DB_NAME || "test";

// EXPORTS
// export database
export const getDb = async () => {
    const client = await getMongoClientInstance();
    const db: Db = client.db(DATABASE_NAME);

    return db;
};