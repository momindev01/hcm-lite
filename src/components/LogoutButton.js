"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/context/AuthContext";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
    >
      Logout
    </button>
  );
}