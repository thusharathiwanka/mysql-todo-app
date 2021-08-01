import { FaTimes } from "react-icons/fa";

const Task = () => {
	return (
		<div className="task">
			<div className="task-text">
				<h3>Task</h3>
			</div>
			<FaTimes
				style={{
					cursor: "pointer",
				}}
			/>
		</div>
	);
};

export default Task;
