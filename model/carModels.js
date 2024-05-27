import { MongoClient, ServerApiVersion } from 'mongodb';
const uri =
  'mongodb+srv://chandra98au:EWCdATZ1soDCW6p6@cluster0.aymawxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getAllCars() {
  try {
    await client.connect();
    await client.db('testdata').command({ ping: 1 });
    const db = client.db('testdata');
    const carsData = db.collection('cars');
    const data = await carsData.find().toArray();
    return data;
  } finally {
    await client.close();
  }
}

async function addCar(carData) {
  try {
    await client.connect();
    await client.db('testdata').command({ ping: 1 });
    const db = client.db('testdata');
    const collection = db.collection('cars');
    await collection.insertOne(carData);
  } finally {
    await client.close();
  }
}
async function deleteCars(carData) {
  try {
    await client.connect();
    await client.db('testdata').command({ ping: 1 });
    const db = client.db('testdata');
    const collection = db.collection('cars');
    await collection.deleteOne(carData);
  } finally {
    await client.close();
  }
}
export default { getAllCars, addCar, deleteCars };
