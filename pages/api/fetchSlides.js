import { MongoClient } from "mongodb";

export default async function GET(request, response) {
  // URI found in the Environmental Variables
  const uri = process.env.MONGODB_URI;

  // New instance of MongoDB
  const client = new MongoClient(uri);

  // The variable that stores the result that will get passed to the website
  let result;

  try {
    // Use connect method to connect to the server
    await client.connect();

    // Grabs the slides
    await findSlides("main", "slides");
  } catch (e) {
    result = "Error: " + e.message;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  async function findSlides(
    dbName,
    collectionName,
    maxResults = Number.MAX_SAFE_INTEGER
  ) {
    const cursor = client
      .db(dbName)
      .collection(collectionName)
      .find({
        id: { $gte: 1 },
      })
      .sort({ id: 1 })
      .limit(maxResults);

    result = await cursor.toArray();
  }

  return response.json(
    {
      body: result,
    },
    {
      status: 200,
    }
  );
}
