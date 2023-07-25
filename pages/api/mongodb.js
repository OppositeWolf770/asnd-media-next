// require('dotenv').config()
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://oppositewolf770:Trimming2-Legible0-Immortal9-Tapestry4@asnd-media-next.4czmmqt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

let movie;

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    movie = await movies.findOne(query);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

const test = (request, response) =>
  response.send({
    data: movie
  })

export default test
