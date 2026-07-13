"use client";
import React from 'react'
import { useAuth } from "../hooks/useAuth";

const page = () => {

  const { handleLogout } = useAuth()
  return (
    <div>
      homepage
     <button className ="text-white bg-amber-950" onClick={handleLogout}>logout</button>
    </div>
  )
}

export default page
