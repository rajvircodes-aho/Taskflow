"use client";

import React from "react";
import { useAuth } from "../../hooks/useAuth";
import {useRouter} from "next/navigation";
import { useParams } from "next/navigation";

const page = () => {
  const { handleLogout } = useAuth();
  const params = useParams();
  const router = useRouter();
  const addProject = ()=>{
    router.push("/addproject")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
        <h1 className="text-3xl font-bold tracking-wide text-red-600">
          Taskflow
        </h1>

        <div className="flex gap-4">
          <button onClick={addProject} className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 font-medium">
            Add Project
          </button>

          <button className="px-5 py-2 rounded-lg border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition duration-200 font-medium">
            Get Projects
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-red-600 hover:text-red-500 transition duration-200"
          >
            Logout
          </button>
        </div>
      </nav>

   
      <div className="px-8 pt-8">
        <h2 className="text-4xl font-bold mb-2">Project Board</h2>
        <p className="text-zinc-400">
          Organize your tasks efficiently.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

        {/* Todo */}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-red-500">
              Todo
            </h2>

            <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
              0
            </span>
          </div>

          <div className="space-y-4">
            {/* Card Example */}
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-red-500 transition">
              <h3 className="font-semibold">
                Design Landing Page
              </h3>

              <p className="text-sm text-zinc-400 mt-2">
                Create responsive landing page for Taskflow.
              </p>

              <div className="mt-4 flex justify-between text-xs text-zinc-500">
                <span>Priority: High</span>
                <span>12 Jul</span>
              </div>
            </div>
          </div>
        </div>

     
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-yellow-500">
              Pending
            </h2>

            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
              0
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-yellow-500 transition">
              <h3 className="font-semibold">
                Build Authentication
              </h3>

              <p className="text-sm text-zinc-400 mt-2">
                JWT Authentication with refresh tokens.
              </p>

              <div className="mt-4 flex justify-between text-xs text-zinc-500">
                <span>Priority: Medium</span>
                <span>14 Jul</span>
              </div>
            </div>
          </div>
        </div>

        {/* Done */}
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold text-green-500">
              Done
            </h2>

            <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
              0
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-green-500 transition">
              <h3 className="font-semibold">
                Setup Backend
              </h3>

              <p className="text-sm text-zinc-400 mt-2">
                Express server and MongoDB connected.
              </p>

              <div className="mt-4 flex justify-between text-xs text-zinc-500">
                <span>Completed</span>
                <span>10 Jul</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
