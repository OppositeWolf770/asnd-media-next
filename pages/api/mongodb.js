const { MongoClient } = require("mongodb");

export default async function GET(request, response) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  let movie;

  try {
    const database = client.db("main");
    const slides = database.collection("slides");

    const query = { id: "1" };

    movie = await slides.findOne(query);
  } catch (e) {
    movie = e.message;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  return response.json(
    {
      body: movie,
    },
    {
      status: 200,
    }
  );
}
