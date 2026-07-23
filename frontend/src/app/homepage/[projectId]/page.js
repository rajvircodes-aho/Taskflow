"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRouter, useParams } from "next/navigation";
import { useTask } from "../../hooks/useTask";
import { DndContext } from "@dnd-kit/core";
import Column from "@/app/components/column";
import {arrayMove} from "@dnd-kit/sortable";
import { reorderTasks } from "@/app/components/services/auth.api";

import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TaskCard from "@/app/components/TaskCard";


const Page = () => {

  const { handleLogout } = useAuth();

  const router = useRouter();

  const { projectId } = useParams();

 function handleDragEnd(event) {

  const { active, over } = event;


  if (!over) return;


  const taskId = active.id;


  const overTask = tasks.find(
    task => task._id === over.id
  );


  const currentTask = tasks.find(
    task => task._id === taskId
  );


  if (!currentTask) return;



  const newStatus = overTask
    ? overTask.status
    : over.id;



  if(currentTask.status === newStatus){

    const oldIndex = tasks.findIndex(
      task => task._id === taskId
    );


    const newIndex = tasks.findIndex(
      task => task._id === over.id
    );


    if(oldIndex !== newIndex){

  const updatedTasks = arrayMove(
    tasks,
    oldIndex,
    newIndex
  );


  const tasksWithPosition = updatedTasks.map(
    (task,index)=>({

      ...task,

      position:index

    })
  );


  setTasks(tasksWithPosition);

console.log(
  tasksWithPosition.map(task => ({
    id: task._id,
    position: task.position
  }))
);

  reorderTasks(
    tasksWithPosition.map(task=>({

      id:task._id,

      position:task.position

    }))
  );


}


    return;
  }



  setTasks(prev =>
    prev.map(task =>
      task._id === taskId
      ?
      {
        ...task,
        status:newStatus
      }
      :
      task
    )
  );


  handleTaskChange(
    taskId,
    newStatus
  );

}
 const {
    tasks,
    loading,
    handleDeleteTask,
    fetchTasks,
    setTasks,
    handleTaskChange
  } = useTask(projectId);

  useEffect(() => {
  if (projectId) {
    fetchTasks();
  }
}, [projectId]);



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

<DndContext onDragEnd={handleDragEnd}>

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




         <Column
 id="todo"
 title="Todo"
>


           <SortableContext
  items={todoTasks.map(task => task._id)}
  strategy={verticalListSortingStrategy}
>

  {
    todoTasks.map(task => (

      <TaskCard
        key={task._id}
        task={task}
        handleDeleteTask={handleDeleteTask}
      />

    ))
  }

</SortableContext>



        </Column>


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





          <Column
 id="pending"
 title="Pending"
>


            <SortableContext
  items={pendingTasks.map(task => task._id)}
  strategy={verticalListSortingStrategy}
>

{
  pendingTasks.map(task => (

    <TaskCard
      key={task._id}
      task={task}
      handleDeleteTask={handleDeleteTask}
    />

  ))
}

</SortableContext>


          </Column>


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





         <Column
 id="done"
 title="Done"
>


           <SortableContext
  items={doneTasks.map(task => task._id)}
  strategy={verticalListSortingStrategy}
>

{
  doneTasks.map(task => (

    <TaskCard
      key={task._id}
      task={task}
      handleDeleteTask={handleDeleteTask}
    />

  ))
}

</SortableContext>


         </Column>


        </div>




      </div>
 </DndContext>


    </div>
   
    
  );
  
};



export default Page;