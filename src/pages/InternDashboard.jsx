import React, { useEffect, useState } from "react";

const InternDashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data.filter(task => task.assignedTo === "Intern")))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Intern Dashboard</h2>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <li key={index}>{task.title}</li>
                    ))
                ) : (
                    <p>No tasks assigned</p>
                )}
            </ul>
        </div>
    );
};

export default InternDashboard;

