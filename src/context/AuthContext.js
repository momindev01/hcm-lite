
"use client";

import { createContext, useState, useEffect } from "react";

import { getSession, clearSession } from "@/lib/storage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = getSession();

    if (savedUser) {
      setUser(savedUser);
    }

    setIsLoading(false);
  }, []);

  function logout() {
    clearSession();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
