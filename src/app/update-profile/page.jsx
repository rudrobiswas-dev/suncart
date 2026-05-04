"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  if (isPending) return <section className="container-page py-16 text-center"><span className="loading loading-spinner loading-lg" /></section>;
  if (!session) router.push("/login");

  const submit = async (e) => {
    e.preventDefault();
    setMessage("");
    const result = await authClient.updateUser({ name: name || session?.user.name || "SunCart User" });
    if (result.error) {
      setMessage(result.error.message || "Could not update profile");
      return;
    }
    setMessage("Profile updated successfully");
    router.refresh();
  };

  return (
    <section className="container-page py-12">
      <form onSubmit={submit} className="card mx-auto max-w-md border border-orange-100 bg-white shadow-xl">
        <div className="card-body gap-4">
          <h1 className="text-3xl font-black">Update Profile</h1>
          <input className="input input-bordered" placeholder={session?.user.name || "Your name"} value={name} onChange={(e) => setName(e.target.value)} />
          {message && <div className="alert py-2 text-sm">{message}</div>}
          <button className="btn btn-primary text-white">Save Changes</button>
        </div>
      </form>
    </section>
  );
}
