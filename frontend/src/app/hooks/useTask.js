"use client";

import {
    createTask,
    getProjectTasks,
    updateTask,
    deleteTask,
} from "../components/services/auth.api";

import { useState, useEffect } from "react";

export const useTask = (projectId) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleCreateTask = async (title, description) => {
        try {
            const data = await createTask(title, description, projectId);

            setTasks(prev => [
    ...prev,
    data
]);

        } catch (err) {
            console.log(err);
        }
    };

    const fetchTasks = async () => {

        if (!projectId) return;

        setLoading(true);

        try {
            const data = await getProjectTasks(projectId);

            console.log("API Response:", data);

            setTasks(data);

        } catch (err) {
            console.log(err);

        } finally {
            setLoading(false);
        }
    };

    const handleUpdateTask = async (
        taskId,
        title,
        description,
        status
    ) => {

        try {
            const data = await updateTask(
                taskId,
                title,
                description,
                status
            );

            setTasks(prev =>
                prev.map(task =>
                    task._id === taskId
                        ? data.task
                        : task
                )
            );

        } catch (err) {
            console.log(err);
        }
    };

const handleTaskChange = async (taskId, status) => {
    try {
        const data = await updateTask(taskId, { status });

        setTasks(prev =>
            prev.map(task =>
                task._id === taskId ? data : task
            )
        );
    } catch (err) {
        console.log(err);
    }
};
    const handleDeleteTask = async (taskId) => {

        try {
            await deleteTask(taskId);

            setTasks(prev =>
                prev.filter(task => task._id !== taskId)
            );

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (projectId) {
            fetchTasks();
        }
    }, [projectId]);

    return {
        tasks,
        loading,
        fetchTasks,
        handleCreateTask,
        handleUpdateTask,
        handleDeleteTask,
        setTasks,
        handleTaskChange
    };
};