const { MongoClient } = require('mongodb');

// const DEV = 'localhost';
const TEST = 'mongodb';

const MONGO_DB_URL = `mongodb://${TEST}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

const connection = () =>
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((connect) => connect.db(DB_NAME))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

module.exports = connection;
