const host = 'localhost';
const port = 27017;
const user = 'root';
const password = 'toor';
const database = 'starwars';

/* TODO: A fenti adatokkal hozzd létre az adatbázist */

module.exports = {
  uri: `mongodb://${user}:${password}@${host}:${port}/${database}`,
  options: {
    connectTimeoutMS: 5000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    useMongoClient: true,
  },
};