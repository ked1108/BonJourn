import {useContext} from 'react';
import { TaskContext } from '../context/TaskContext';
import './TaskList.css';

const priorityColors = {
    High: '#e74c3c',
    Medium: '#f39c12',
    Low: '#2ecc71',
};

const TaskList = ({ tasks }) => {
    const { setTasks } = useContext(TaskContext);

    const toggleDone = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    return (
        <div className="tasklist glass-box">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task-item ${task.done ? 'done' : ''}`}
                        style={{ borderLeft: `6px solid ${priorityColors[task.priority] || '#ccc'}` }}
                    >
                        <div className="task-header">
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => toggleDone(task.id)}
                            />
                            <strong className="task-title">{task.title}</strong>
                        </div>
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
