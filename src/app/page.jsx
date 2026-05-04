import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  const popularProducts = products.filter((p) => p.isPopular).slice(0, 3);

  return (
    <>
      <Hero />
      <section className="container-page py-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-bold uppercase tracking-widest text-orange-500">Popular Products</p>
            <h2 className="text-3xl font-black text-slate-900">Customer favorites</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {popularProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <section id="tips" className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {["Drink water often", "Use sun protection", "Take breaks in shade"].map((tip) => (
            <div key={tip} className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-xl font-black">{tip}</h3>
              <p className="mt-2 text-sm text-slate-600">Simple habits can make summer days safer and more comfortable.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
