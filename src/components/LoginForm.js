
"use client";

import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Toast from "@/components/Toast";
import FormField from "@/components/FormField";
import SignupButton from "@/components/SignupButton";

import { getAccounts, saveSession } from "@/lib/storage";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toast, setToast] = useState({
    message: "",
    type: "success"
  });

  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    const accounts = getAccounts();

    const user = accounts.find(
      (account) =>
        account.email === email.toLowerCase() &&
        account.password === password
    );

    if (!user) {
      setToast({
        message: "Invalid email or password!",
        type: "error"
      });
      return;
    }

    setLoading(true);

    saveSession(user);
    setUser(user);

    setToast({
      message: "Login successful!",
      type: "success"
    });

    if (user.role === "employee") {
      router.push("/employee/dashboard");
    } else if (user.role === "hr") {
      router.push("/hr/dashboard");
    } else if (user.role === "admin") {
      router.push("/admin/dashboard");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome Back
      </h1>

      <form onSubmit={handleLogin} className="space-y-5">
        <FormField
          label="Work Email"
          type="email"
          placeholder="example@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SignupButton
          text={loading ? "Signing in..." : "Log In"}
          disabled={loading}
        />

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </form>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast({ message: "", type: "success" })
        }
      />
    </div>
  );
}
