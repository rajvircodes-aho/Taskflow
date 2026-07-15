"use client";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {


  const { loading, handleLogin } = useAuth()

  const [email, setEmail] = useState("")
  const [ password, setPassword ] = useState("")
  const router = useRouter();
  const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({email,password})
        router.push("/projects");
    }

     if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Sign in to your Taskflow account.
        </p>

        <form onSubmit={handleSubmit}className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none transition focus:border-red-500"
            />
          </div>
          <div className="text-white">
  Don't have an account? <Link  className="text-red-600" href="/register">Register</Link>
</div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}