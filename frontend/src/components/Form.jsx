import { useState } from "react";
import axios from "axios";

const Form = () => {
	const [todo, setTodo] = useState({ isCompleted: false });

	const handleSaveTodo = async (e) => {
		e.preventDefault();

		try {
			await axios.post("/", todo);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<form>
			<input
				type="text"
				name="task"
				id="task-input"
				placeholder="Enter your task here"
				onChange={(e) => setTodo({ ...todo, task: e.target.value })}
				value={todo.task}
			/>
			<button onClick={handleSaveTodo}>Save</button>
		</form>
	);
};

export default Form;
