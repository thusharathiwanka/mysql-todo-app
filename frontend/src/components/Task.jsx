import { FaTimes, FaCheck } from "react-icons/fa";

const Task = ({ todo, updateTask, deleteTask }) => {
	return (
		<div className="task">
			<div className="task-text">
				<h3 className={todo.isCompleted && "completed"}>{todo.task}</h3>
			</div>
			<div className="actions">
				{!todo.isCompleted && (
					<FaCheck
						style={{
							cursor: "pointer",
						}}
						onClick={() => updateTask(todo.id)}
					/>
				)}
				<FaTimes
					style={{
						cursor: "pointer",
						marginLeft: "1rem",
					}}
					onClick={() => deleteTask(todo.id)}
				/>
			</div>
		</div>
	);
};

export default Task;
