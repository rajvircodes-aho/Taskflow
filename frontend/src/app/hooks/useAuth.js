"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { login, register, logout, getMe } from "../components/services/auth.api";

export const useAuth =()=> {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            console.log("LOGIN RESPONSE:", data)
            setUser(data.user)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }
    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }
     const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {

        const getAndSetUser = async () => {
            try {

                const data = await getMe()
                console.log("GET ME RESPONSE:", data)
                setUser(data.user)
            } catch (err) { } finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [])

    return { user, loading, handleRegister, handleLogin, handleLogout }
}