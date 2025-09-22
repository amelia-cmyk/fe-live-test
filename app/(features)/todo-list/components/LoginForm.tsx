"use client";
import React from "react";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Username and password are required");
      return;
    }

    if (username !== "admin" || password !== "secret") {
      setMessage("Invalid credentials");
      return;
    }

    setMessage(`Welcome, ${username}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto p-6 border rounded-xl shadow">
      <label>
        Username
        <input
          type="text"
          aria-label="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          aria-label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Log in
      </button>

      {message && <p role="alert">{message}</p>}
    </form>
  );
}
