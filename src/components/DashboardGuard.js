
"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { AuthContext } from "@/context/AuthContext";

export default function DashboardGuard({ allowedRole, children }) {
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (!user || user.role !== allowedRole) {
      router.replace("/login");
    }
  }, [user, isLoading, allowedRole, router]);

  if (isLoading || !user || user.role !== allowedRole) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <p className="mt-4 text-gray-600 font-medium">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  return children;
}
