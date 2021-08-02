const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./api/config/db.config");
const todoRoutes = require("./api/routes/todo.routes");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

db.connect((err) => {
	if (err) {
		console.log(err.message);
		console.log("something went wrong. couldn't connect to the database");
		return;
	}

	app.get("/", (req, res) => {
		res.send("MYSQL TODO API");
	});

	app.listen(PORT, () => {
		console.log(`database connected and listening on port ${PORT}`);
	});
});
