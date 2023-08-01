import { MongoClient } from "mongodb";

const ObjectId = require("mongodb").ObjectId;

// const { MongoClient } = require("mongodb");

export default async function GET(request, response) {
  // URI found in the Environmental Variables
  const uri = process.env.MONGODB_URI;

  // New instance of MongoDB
  const client = new MongoClient(uri);

  // Database and Collection names
  const dbName = "main";
  const collectionName = "projectItems";

  let info;

  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Successfully connected to the server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    info = collection.find({
      id: {
        $in: [1, 2],
      },
    });

    // const query = { id: "1" };

    // info = await collection.findOne(query);
  } catch (e) {
    info = e.message;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  return response.json(
    {
      body: info,
    },
    {
      status: 200,
    }
  );
}
