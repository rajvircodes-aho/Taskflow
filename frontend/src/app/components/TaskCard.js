"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


export default function TaskCard({ task, handleDeleteTask }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: task._id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-zinc-900 rounded-lg p-4 border border-zinc-800"
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <button
        onClick={() => handleDeleteTask(task._id)}
      >
        Delete
      </button>
    </div>
  );
}