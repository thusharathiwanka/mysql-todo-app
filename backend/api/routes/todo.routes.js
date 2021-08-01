const express = require("express");
const router = express.Router();
const {
	getTodos,
	saveTodo,
	updateTodo,
	deleteTodo,
} = require("../controllers/todo.controllers");

router.get("/", getTodos);
router.post("/", saveTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
