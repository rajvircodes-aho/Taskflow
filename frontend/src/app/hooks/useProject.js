"use client";

import { createProject, getProjects, updateProject, deleteProject } from "../components/services/auth.api";
import { useState, useEffect } from "react";


export const useProject = (user) => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleCreateProject = async (title, description) => {

        try {
            const data = await createProject(title, description);

            setProjects(prev => [
                ...prev,
                data
            ]);

        } catch(err) {
            console.log(err);
        }
    };


    const fetchProjects = async () => {

        setLoading(true);

        try {
            const data = await getProjects();
            console.log("API Response:", data);
            setProjects(data);

        } catch(err) {
            console.log(err);

        } finally {
            setLoading(false);
        }
    };


    const handleUpdateProject = async (id, projectData) => {

        try {
            const data = await updateProject(id, projectData);

            setProjects(prev =>
                prev.map(project =>
                    project._id === id
                    ? data.project
                    : project
                )
            );

        } catch(err) {
            console.log(err);
        }
    };


    const handleDeleteProject = async (id) => {

        try {
            await deleteProject(id);

            setProjects(prev =>
                prev.filter(project => project._id !== id)
            );

        } catch(err) {
            console.log(err);
        }
    };


 useEffect(() => {
    if (user) {
        fetchProjects();
    } else {
        setProjects([]);
    }
}, [user]);


    return {
        projects,
        loading,
        fetchProjects,
        handleCreateProject,
        handleUpdateProject,
        handleDeleteProject
    };
};


