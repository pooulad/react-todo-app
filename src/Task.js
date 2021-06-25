import React from 'react';
import "./App.css";

function Task({ task,completeTask,index,removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button style={{ textDecoration: task.completed ? "line-through" : "" }} onClick={() => completeTask(index)}>Complete</button>
        </div>
    );
}

export default Task
