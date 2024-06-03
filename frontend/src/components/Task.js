import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
    return (
        <div className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
};

export default Task;
