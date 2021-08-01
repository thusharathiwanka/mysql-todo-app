const db = require("../config/db.config");

const saveTodo = (req, res) => {
	const todo = req.body.todo;

	db.query("INSERT INTO todos (todo) VALUES(?)", [todo], (err, result) => {
		if (err) {
			return res.status(406).json({ message: err.message });
		}
		return res.status(201).json({ id: result.insertId });
	});
};

const getTodos = (req, res) => {
	db.query("SELECT * FROM todos", (err, result) => {
		if (err) {
			return res.status(404).json({ message: err.message });
		}
		return res.status(200).json({ todos: result });
	});
};

const updateTodo = (req, res) => {
	const updatedTodo = req.body.updatedTodo;
	const id = req.params.id;

	db.query(
		"UPDATE todos SET todo=? WHERE id=?",
		[updatedTodo, id],
		(err, result) => {
			if (err) {
				return res.status(406).json({ message: err.message });
			}
			return res.status(200).json({ rows: result.affectedRows });
		}
	);
};

const deleteTodo = (req, res) => {
	const id = req.params.id;

	db.query("DELETE FROM todos WHERE id=?", [id], (err, result) => {
		if (err) {
			return res.status(406).json({ message: err.message });
		}
		return res.status(200).json({ rows: result.affectedRows });
	});
};

module.exports = { saveTodo, getTodos, updateTodo, deleteTodo };
