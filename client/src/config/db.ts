const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
const dbName = "p3-gc01";

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    } catch (error) {
        console.log(error);
        // Ensures that the client will close on the catch block
        await client.close();
    }
}

function getDatabase() {
    return client.db(dbName);
}

module.exports = {
    connect,
    getDatabase,
};
