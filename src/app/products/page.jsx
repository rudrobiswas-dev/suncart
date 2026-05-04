import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="container-page py-12">
      <div className="mb-8">
        <p className="font-bold uppercase tracking-widest text-orange-500">All Products</p>
        <h1 className="text-4xl font-black text-slate-900">Summer essentials collection</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Browse all available products. Product details are protected and require login.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
