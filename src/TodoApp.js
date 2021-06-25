import React, { useState, useEffect } from 'react';
import "./App.css";
import Task from "./Task";
import CreateTask from "./CreateTask";

function TodoApp() {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);
    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });
    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };
    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    return (
        <div className="todo_app">
            <h1>simple todo-app with reactJs</h1>
            <div className="todo-container">
                <div className="header">Pending tasks ({tasksRemaining})</div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            completeTask={completeTask}
                            removeTask={removeTask}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        </div>

    )
}

export default TodoApp;
