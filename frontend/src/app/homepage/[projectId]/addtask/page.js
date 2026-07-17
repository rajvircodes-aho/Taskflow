"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useTask } from "@/app/hooks/useTask";

const AddTask = () => {
  const router = useRouter();
   const { projectId } = useParams();
   const {handleCreateTask} = useTask(projectId)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const goBack = () => {
    router.back();
  };

  const params = useParams();

console.log("PARAMS:", params);


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreateTask(title,description,projectId)
    console.log({
      title,
      description,

    });
     router.push(`/homepage/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-red-600 text-center mb-2">
          Add Task
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Create a new task for this project.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 text-zinc-300 font-medium">
              Task Title
            </label>

            <input
              type="text"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-600 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-300 font-medium">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Describe the task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-red-600 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-2">

            <button
              type="button"
              onClick={goBack}
              className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:border-red-600 hover:text-red-500 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
            >
              Create Task
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddTask;