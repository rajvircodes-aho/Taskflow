 "use client";
 import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const {loading, handleRegister} = useAuth()
  const router = useRouter()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
  const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        router.push("/login")
    }

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }
 
  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Join Taskflow and start managing your projects.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              User name
            </label>

            <input
            onChange={(e) => { setUsername(e.target.value) }}
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <input
            onChange={(e) => { setEmail(e.target.value) }}
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <input
            onChange={(e) => { setPassword(e.target.value) }}
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>
           <div className="text-white">
  Already have an account? <Link  className="text-red-600" href="/login">Login</Link>
</div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
