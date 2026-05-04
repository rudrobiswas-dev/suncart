"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await authClient.signIn.email({ email, password });
    setLoading(false);
    if (result.error) {
      setError(result.error.message || "Login failed");
      return;
    }
    router.push("/products");
    router.refresh();
  };

  return (
    <form onSubmit={submit} className="card mx-auto max-w-md border border-orange-100 bg-white shadow-xl">
      <div className="card-body gap-4">
        <h1 className="text-3xl font-black">Login</h1>
        <input className="input input-bordered w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input input-bordered w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <div className="alert alert-error py-2 text-sm">{error}</div>}

        <button className="btn btn-primary text-white" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        <button type="button" className="btn btn-outline" onClick={() => authClient.signIn.social({ provider: "google" })}>Continue with Google</button>

        <p className="text-center text-sm">No account? <Link className="link link-primary" href="/register">Create one</Link></p>
      </div>
    </form>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password
    });

    setLoading(true);
    setError("");
    const result = await authClient.signUp.email({ name, email, password });
    setLoading(false);
    if (result.error) {
      setError(result.error.message || "Registration failed");
      return;
    }
    router.push("/products");
    router.refresh();
  };

  return (
    <form onSubmit={submit} className="card mx-auto max-w-md border border-orange-100 bg-white shadow-xl">
      <div className="card-body gap-4">
        <h1 className="text-3xl font-black">Create Account</h1>
        <input className="input input-bordered w-full" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="input input-bordered w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input input-bordered w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
        {error && <div className="alert alert-error py-2 text-sm">{error}</div>}


        <button className="btn btn-primary text-white" disabled={loading}>{loading ? "Creating..." : "Register"}</button>

        
        <button type="button" className="btn btn-outline" onClick={() => authClient.signIn.social({ provider: "google" })}>Continue with Google</button>
        <p className="text-center text-sm">Already have account? <Link className="link link-primary" href="/login">Login</Link></p>
      </div>
    </form>
  );
}
