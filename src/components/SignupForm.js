"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import FormField from "@/components/FormField";
import RoleSelector from "@/components/RoleSelector";
import SignupButton from "@/components/SignupButton";

import { getAccounts, saveAccount } from "@/lib/storage";

export default function SignupForm() {

  const router = useRouter();
  const [role, setRole] = useState("employee");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    const accounts = getAccounts();

    const existingAccount = accounts.find(
      (account) => account.email === email.toLowerCase()
    );

    if (existingAccount) {
  alert("This email is already registered. Try another email/Sign in.");
  return;
}

    const newAccount = {
      name: name,
      email: email.toLowerCase(),
      password: password,
      role: role
    };

    saveAccount(newAccount);

alert("Account created successfully!");

router.push("/login");
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

      <h1 className="text-3xl font-bold text-center mb-6">
        Create Account
      </h1>

      <form onSubmit={handleSignup} className="space-y-5">

        <FormField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <RoleSelector role={role} setRole={setRole} />

        <SignupButton text="Create Account" />

        {message && (
          <p className="text-center text-sm text-blue-600">
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Sign In
          </Link>
        </p>

      </form>
    </div>
  );
}