import React, { useState, useContext } from 'react';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskContext';


import './TasksPage.css';
import HeroBanner from "../components/HeroBanner.jsx";

const TaskPage = () => {
    const { tasks, setTasks } = useContext(TaskContext);
    const [form, setForm] = useState({
        title: '',
        date: '',
        tag: '',
        priority: 'Low',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            ...form,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        setForm({ title: '', date: '', tag: '', priority: 'Low' });
    };

    return (
        <div>
            <HeroBanner title={"Your Tasks 🎯"} subtitle={""} backgroundImage={'/src/assets/tasks.jpg'} />
            <div className="task-page">
                <div className="task-content">
                    <div className="task-list-section">
                        <TaskList tasks={tasks} />
                    </div>

                    <form className="task-form" onSubmit={handleSubmit}>
                        <h2>Add New Task</h2>
                        <input name="title" value={form.title} onChange={handleChange} placeholder="Task Title" required />
                        <input name="date" type="date" value={form.date} onChange={handleChange} required />
                        <input name="tag" value={form.tag} onChange={handleChange} placeholder="Tag" />
                        <select name="priority" value={form.priority} onChange={handleChange}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TaskPage;
