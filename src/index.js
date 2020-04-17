const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const initRouter = require("./routes");
const db = require("./db");

db.sync();

const app = express();
app.get("/", (req, res) => res.end("root"));
app.use(bodyParser.json());

initRouter(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
