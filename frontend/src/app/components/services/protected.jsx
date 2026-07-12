"use client";

import { useEffect } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Protected({ children }) {
  const { loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
console.log("Loading:", loading);
console.log("User:", user);

  return children;
}