const jsonServer = require("json-server");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Load both JSON files directly
const data = require("./data.json");
const mens = require("./Mens.json");

// Merge them into one object
// ⚠️ If keys are the same, `mens` will overwrite `data`
const db = { ...data, ...mens };

// Create router with merged data
const router = jsonServer.router(db);

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
