import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
    return (
        <div className="tasklist glass-box">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong><br />
                        <small>
                            Date: {task.date} | Tag: {task.tag} | Priority: {task.priority}
                        </small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
