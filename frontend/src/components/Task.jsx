import { useEffect, useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import Timer from "./Timer";

const Task = ({ todo, updateTask, deleteTask }) => {
	const [timer, setTimer] = useState({ s: 0, m: 0, h: 0 });

	let updatedS = timer.s,
		updatedM = timer.m,
		updatedH = timer.h;
	let interval;

	useEffect(() => {
		startTimer();
	}, []);

	const startTimer = () => {
		interval = setInterval(updateTime, 1000);
	};

	const stopTimer = () => {
		clearInterval(interval);
	};

	const updateTime = () => {
		if (updatedS === 60) {
			updatedM++;
			updatedS = 0;
		}
		if (updatedM === 60) {
			updatedH++;
			updatedM = 0;
		}
		updatedS++;
		setTimer({ s: updatedS, m: updatedM, h: updatedH });
	};
	return (
		<div className="todo-container">
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
							onClick={() => {
								updateTask(todo.id);
								stopTimer();
							}}
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
			{!todo.isCompleted && <Timer timer={timer} />}
		</div>
	);
};

export default Task;
