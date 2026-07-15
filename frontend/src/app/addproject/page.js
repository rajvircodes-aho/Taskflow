"use client";

import React from "react";
import { useProject } from "../hooks/useProject";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProject = () => {

  const { handleCreateProject} = useProject()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  const addProjects = async (e) => {
    e.preventDefault()
    await handleCreateProject(title,description)
    router.push("/projects")
  }
  

  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

       
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Add Project
          </h1>
          <p className="text-zinc-400 mt-2">
            Create a new project for your board.
          </p>
        </div>

     
        <form onSubmit={addProjects} className="space-y-6">

         
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Project Title
            </label>

            <input
            
            onChange={(e) => { setTitle(e.target.value) }}
              type="text"
              placeholder="Enter project title"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-red-600 transition"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Description
            </label>

            <textarea
          
            onChange={(e) => { setDescription(e.target.value) }}
              rows={6}
              placeholder="Describe your project..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-red-600 resize-none transition"
            />
          </div>

         
          <div className="flex gap-4 pt-2">

            <button 
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition"
            >
              Create Project
            </button>

            <button
              type="button"
              className="flex-1 border border-zinc-700 hover:border-red-600 hover:text-red-500 py-3 rounded-lg transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddProject;