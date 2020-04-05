const shortid = require("shortid");
const path = require("path");
const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

module.exports = async function createDB() {
  const adapter = new FileAsync(path.resolve(__dirname, "db.json"));
  const db = await low(adapter);
  db.defaults({ users: [] }).write();
  return db;
};
