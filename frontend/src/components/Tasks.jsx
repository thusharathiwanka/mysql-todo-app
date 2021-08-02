import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

const Tasks = () => {
	const [todos, setTodos] = useState([]);
	const [isCompleted, setIsCompleted] = useState([]);

	useEffect(() => {
		getTodos();
	}, [setTodos]);

	const getTodos = async () => {
		try {
			const todos = await axios.get("/");
			setTodos(todos.data.todos);
		} catch (err) {
			console.log(err.message);
		}
	};

	const deleteTask = async (id) => {
		try {
			await axios.delete(`/${id}`);
			setTodos(todos.filter((todo) => todo.id !== id));
		} catch (err) {
			console.log(err.message);
		}
	};

	const updateTask = async (id) => {
		try {
			await axios.put(`/${id}`);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="task-container">
			{todos.map((todo) => {
				return (
					<Task
						todo={todo}
						deleteTask={deleteTask}
						updateTask={updateTask}
						key={todo.id}
					/>
				);
			})}
		</div>
	);
};

export default Tasks;
