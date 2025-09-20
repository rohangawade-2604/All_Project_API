const jsonServer = require("json-server");
const server = jsonServer.create();
// const router = jsonServer.router("data.json");
// const router1 = jsonServer.router("Mens.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);


// Load both JSON files
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));
const mens = JSON.parse(fs.readFileSync(path.join(__dirname, "Mens.json")));

// Merge them into one object
// ⚠️ Make sure keys don’t overlap (e.g., both have "products")
const db = { ...data, ...mens };

// Create router with merged data
const router = jsonServer.router(db);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});