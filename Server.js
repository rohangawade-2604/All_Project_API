const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Load both JSON files
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"));
const mens = JSON.parse(fs.readFileSync(path.join(__dirname, "Mens.json"), "utf-8"));

// Merge them into one object
// ⚠️ If keys are same, last one overwrites
const db = { ...data, ...mens };

// Create router with merged data
const router = jsonServer.router(db);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
