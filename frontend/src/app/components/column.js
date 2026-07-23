"use client";

import { useDroppable } from "@dnd-kit/core";


export default function Column({ id, title, children }) {

  const {
    setNodeRef
  } = useDroppable({
    id: id,
  });


  return (
    <div
      ref={setNodeRef}
      className="bg-zinc-950 rounded-xl border border-zinc-800 p-5 min-h-75"
    >

      <h2 className="text-xl font-semibold mb-5">
        {title}
      </h2>


      {children}

    </div>
  );
}