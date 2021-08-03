import React from "react";

const Timer = ({ timer }) => {
	return (
		<div className="todo-timer">
			<span>{timer.h >= 10 ? `${timer.h}hrs` : `0${timer.h}hrs`}</span>
			<span>{timer.m >= 10 ? `${timer.m}mins` : `0${timer.m}mins`}</span>
			<span>{timer.s >= 10 ? `${timer.s}secs` : `0${timer.s}secs`}</span>
		</div>
	);
};

export default Timer;
