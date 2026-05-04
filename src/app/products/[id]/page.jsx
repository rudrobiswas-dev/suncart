import { getProductById } from "@/data/products";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/login");

  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <section className="container-page py-12">
      <div className="grid gap-10 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
        <img src={product.image} alt={product.name} className="w-full rounded-3xl bg-orange-50 object-cover" />
        <div>
          <div className="badge badge-warning">⭐ {product.rating}</div>
          <h1 className="mt-4 text-4xl font-black text-slate-900">{product.name}</h1>
          <p className="mt-2 text-slate-500">{product.brand} • {product.category}</p>
          <p className="mt-6 text-lg text-slate-600">{product.description}</p>
          <p className="mt-6 text-4xl font-black text-orange-500">৳{product.price}</p>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Features</h2>
            <ul className="mt-3 grid gap-3">
              {product.features.map((feature) => <li key={feature} className="rounded-2xl bg-orange-50 px-4 py-3 text-slate-700">✅ {feature}</li>)}
            </ul>
          </div>
          <button className="btn btn-primary mt-8 text-white">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}
