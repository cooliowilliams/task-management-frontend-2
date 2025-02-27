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
        <div className="flex flex-col gap-9 pl-[35px] pt-[20px]">
            <h2 className="font-bold text-gray-700 text-[25px] ">Admin Dashboard</h2>
            <input className="w-48 h-9 border px-2 " type="text" placeholder="Task Name" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <input className="w-48 h-9 border px-2 " type="text" placeholder="Assign To" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
            <button className="bg-blue-700 text-white px-8 py-2 font-bold rounded-sm " onClick={addTask}>Create Task</button>

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
