const { MongoClient } = require('mongodb')

async function main() {
  /**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */

  const uri = "mongodb + srv://oppositewolf770:<password>@asnd-media-next.4czmmqt.mongodb.net/?retryWrites=true&w=majority"

  const client = new MongoClient(uri)
}