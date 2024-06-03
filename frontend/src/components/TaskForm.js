import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setPriority(taskToEdit.priority);
            setDueDate(taskToEdit.dueDate.substring(0, 10));
        }
    }, [taskToEdit]);

    const onSubmit = (e) => {
        e.preventDefault();
        onSave({ title, description, priority, dueDate });
        setTitle('');
        setDescription('');
        setPriority('Medium');
        setDueDate('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
