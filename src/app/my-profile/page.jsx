import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");

  return (
    <section className="container-page py-12">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-orange-100 bg-white p-8 shadow-xl">
        <div className="avatar placeholder mb-5">
          <div className="w-20 rounded-full bg-orange-400 text-white"><span className="text-3xl">{session.user.name?.[0] || "U"}</span></div>
        </div>
        <h1 className="text-3xl font-black">My Profile</h1>
        <div className="mt-6 space-y-3 text-slate-700">
          <p><strong>Name:</strong> {session.user.name || "Not set"}</p>
          <p><strong>Email:</strong> {session.user.email}</p>
        </div>
        <Link href="/update-profile" className="btn btn-primary mt-8 text-white">Update Profile</Link>
      </div>
    </section>
  );
}
