const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "todo-app",
});

db.connect((err) => {
	if (err) {
		console.log(err.message);
		console.log("something went wrong. couldn't connect to the database");
		return;
	}

	app.listen(PORT, () => {
		console.log(`database connected and listening on port ${PORT}`);
	});
});

app.get("/", (req, res) => {
	res.send("MYSQL TODO API");
});
