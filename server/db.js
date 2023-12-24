const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/items")
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((error) => {
        console.error(error);
        return cb(error);
      });
  },
  getDB: () => dbConnection,
};
