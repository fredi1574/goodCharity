const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect("process.env.MONGODB_URI")
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
