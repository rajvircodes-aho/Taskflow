"use client";

import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRouter, useParams } from "next/navigation";
import { useTask } from "../../hooks/useTask";

const Page = () => {

  const { handleLogout } = useAuth();

  const router = useRouter();

  const { projectId } = useParams();


  const {
    tasks,
    loading,
    handleDeleteTask,
  } = useTask(projectId);



  const addTask = () => {
    router.push(`/homepage/${projectId}/addtask`);
  };


  const backToProjects = () => {
    router.push("/projects");
  };


  const todoTasks = tasks.filter(
    task => task.status === "todo"
  );


  const pendingTasks = tasks.filter(
    task => task.status === "pending"
  );


  const doneTasks = tasks.filter(
    task => task.status === "done"
  );



  return (
    <div className="min-h-screen bg-black text-white">


    
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">

        <h1 className="text-3xl font-bold tracking-wide text-red-600">
          Taskflow
        </h1>


        <div className="flex gap-4">


          <button
            onClick={addTask}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-medium"
          >
            Add Task
          </button>



          <button
            onClick={backToProjects}
            className="px-5 py-2 rounded-lg border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition font-medium"
          >
            Projects
          </button>



          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-red-600 hover:text-red-500 transition"
          >
            Logout
          </button>


        </div>

      </nav>

      <div className="px-8 pt-8">

        <h2 className="text-4xl font-bold mb-2">
          Project Board
        </h2>


        <p className="text-zinc-400">
          Organize your tasks efficiently.
        </p>

      </div>





      {
        loading && (
          <p className="text-center text-zinc-400 mt-10">
            Loading tasks...
          </p>
        )
      }



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">


        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5">


          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-semibold text-red-500">
              Todo
            </h2>


            <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
              {todoTasks.length}
            </span>


          </div>




          <div className="space-y-4">


            {
              todoTasks.map(task => (

                <div
                  key={task._id}
                  className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-red-500 transition"
                >

                  <h3 className="font-semibold">
                    {task.title}
                  </h3>


                  <p className="text-sm text-zinc-400 mt-2">
                    {task.description}
                  </p>



                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="mt-4 text-sm text-red-500 hover:text-red-400"
                  >
                    Delete
                  </button>


                </div>

              ))
            }



          </div>


        </div>

        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5">


          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-semibold text-yellow-500">
              Pending
            </h2>


            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
              {pendingTasks.length}
            </span>


          </div>





          <div className="space-y-4">


            {
              pendingTasks.map(task => (

                <div
                  key={task._id}
                  className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-yellow-500 transition"
                >

                  <h3 className="font-semibold">
                    {task.title}
                  </h3>


                  <p className="text-sm text-zinc-400 mt-2">
                    {task.description}
                  </p>


                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="mt-4 text-sm text-red-500 hover:text-red-400"
                  >
                    Delete
                  </button>


                </div>


              ))
            }



          </div>


        </div>

        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-5">


          <div className="flex justify-between items-center mb-5">


            <h2 className="text-xl font-semibold text-green-500">
              Done
            </h2>



            <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
              {doneTasks.length}
            </span>


          </div>





          <div className="space-y-4">


            {
              doneTasks.map(task => (

                <div
                  key={task._id}
                  className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 hover:border-green-500 transition"
                >

                  <h3 className="font-semibold">
                    {task.title}
                  </h3>


                  <p className="text-sm text-zinc-400 mt-2">
                    {task.description}
                  </p>


                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="mt-4 text-sm text-red-500 hover:text-red-400"
                  >
                    Delete
                  </button>


                </div>

              ))
            }


          </div>


        </div>




      </div>



    </div>
  );
};


export default Page;