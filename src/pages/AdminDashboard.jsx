import React, { useContext } from "react"; 
import { useEffect, useState } from "react";

const AdminDashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [assignee, setAssignee] = useState("");

    useEffect(() => {
        fetch("http://localhost:5001/api/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error(err));
    }, []);

    const addTask = async () => {
        const task = { title: newTask, assignedTo: assignee };
        const response = await fetch("http://localhost:5001/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        if (response.ok) {
            setTasks([...tasks, task]);
            setNewTask("");
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <input type="text" placeholder="Task Name" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <input type="text" placeholder="Assign To" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
            <button onClick={addTask}>Create Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.title} - Assigned to: {task.assignedTo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
