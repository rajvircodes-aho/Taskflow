"use client";
import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true
})


export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        return response.data

    } catch (err) {

        console.log(err)

    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        return response.data

    } catch (err) {
        console.log(err)
    }

}
export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        return response.data

    } catch (err) {

    }
}
export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
    }

}

export async function createProject(title,description){
    try{
        const response = await api.post("/projects", {title,description})
        return response.data
    }
    catch (err){
        console.log(err)
    }
}

export async function getProjects(){
    try {
        const response = await api.get("/projects");
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export async function deleteProject(id){
    try{
        const response = await api.delete(`/projects/${id}`);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}
export async function updateProject(id, title, description){
    try{
        const response = await api.put(`/projects/${id}`, {
            title,
            description
        });

        return response.data;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}



export async function createTask(title, description, projectId) {
    try {
        const response = await api.post("/api/tasks", {
            title,
            description,
            project: projectId
        });

        return response.data;

    } catch(err) {
        console.log(err);
        throw err;
    }
}


export async function getProjectTasks(projectId) {
    try {
        const response = await api.get(`/api/tasks/project/${projectId}`);

        return response.data;

    } catch(err) {
        console.log(err);
        throw err;
    }
}


export async function getTask(id) {
    try {
        const response = await api.get(`/api/tasks/${id}`);

        return response.data;

    } catch(err) {
        console.log(err);
        throw err;
    }
}


export const updateTask = async(id, data)=>{
   console.log("Sending:", data);
    const response = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        data,
        {
            withCredentials:true
        }
    );

    return response.data;
};


export async function deleteTask(id) {
    try {
        const response = await api.delete(`/api/tasks/${id}`);

        return response.data;

    } catch(err) {
        console.log(err);
        throw err;
    }
}

