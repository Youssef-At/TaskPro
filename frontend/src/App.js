import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await axios.get('http://localhost:5000/api/tasks');
            setTasks(res.data);
        };
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        const res = await axios.post('http://localhost:5000/api/tasks', task);
        setTasks([...tasks, res.data]);
    };

    const editTask = async (updatedTask) => {
        const res = await axios.put(`http://localhost:5000/api/tasks/${taskToEdit._id}`, updatedTask);
        setTasks(tasks.map((task) => (task._id === taskToEdit._id ? res.data : task)));
        setTaskToEdit(null);
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    return (
        <div className="App">
            <h1>TaskPro</h1>
            <TaskForm onSave={taskToEdit ? editTask : addTask} taskToEdit={taskToEdit} />
            <TaskList tasks={tasks} onDelete={deleteTask} onEdit={setTaskToEdit} />
        </div>
    );
};

export default App;
