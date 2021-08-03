import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Task from "./Task";

import { ReloadContext } from "../context/Context";

const Tasks = () => {
	const { reload, setReload } = useContext(ReloadContext);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getTodos();
		setReload(false);
	}, [setTodos, reload, setReload]);

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
			setReload(true);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="task-container">
			{todos.map((todo) => {
				return (
					<>
						<Task
							todo={todo}
							deleteTask={deleteTask}
							updateTask={updateTask}
							key={todo.id}
						/>
					</>
				);
			})}
		</div>
	);
};

export default Tasks;
