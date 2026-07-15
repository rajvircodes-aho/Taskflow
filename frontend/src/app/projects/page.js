"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProject } from "../hooks/useProject";

const ProjectsPage = () => {
  const router = useRouter();

  const { fetchProjects, projects } = useProject();

  useEffect(() => {
    fetchProjects();
  }, []);

  const goToProject = (id) => {
    router.push(`/homepage/${id}`)
};

  const openAdd = () =>{
router.push("/addproject")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-red-500">Taskflow</h1>

        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-xl font-semibold">
          Logout
        </button>
      </nav>

      <main className="px-10 py-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">Your Projects</h2>

            <p className="text-zinc-400 mt-2">
              Manage and organize all your projects
            </p>
          </div>

          <button onClick={openAdd} className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition">
            + Create Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              
             onClick={() => goToProject(project._id)}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-red-500 transition cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span className="bg-red-500/10 text-red-500 text-sm px-3 py-1 rounded-full">
                  Active
                </span>
              </div>

              <p className="text-zinc-400 mt-4">
                {project.description}
              </p>

              <div className="flex gap-6 mt-6 text-sm text-zinc-400">
                <div>
                  <p className="text-white font-bold text-lg">12</p>
                  Tasks
                </div>

                <div>
                  <p className="text-white font-bold text-lg">5</p>
                  Members
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <p className="text-xs text-zinc-500">
                  Created 2 days ago
                </p>

                <button className="text-red-500 hover:text-red-400">
                  Open →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;