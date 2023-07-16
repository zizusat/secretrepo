import { MongoClient } from 'mongodb';

const clusterAddress = "cluster1.jiw4o60.mongodb.net";
const dbUser = "zizusat";
const dbPassword = "ND2UMi8jklEq9uKv"
const dbName = "gha-demo";

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
