import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-page py-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="badge badge-secondary mb-4 text-white">Summer Essentials Store</div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-6xl">Stay cool, protected, and ready for summer.</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">Discover sunscreens, bottles, fans, sunglasses, towels, and more products made for bright sunny days.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary text-white">Shop Products</Link>
            <a href="#tips" className="btn btn-outline">Summer Care Tips</a>
          </div>
        </div>
        <div className="sun-gradient rounded-[2rem] p-8 shadow-2xl">
          <div className="rounded-[1.5rem] bg-white/85 p-8 text-center backdrop-blur">
            <div className="text-8xl">🏖️</div>
            <h2 className="mt-4 text-3xl font-black text-slate-900">Hot Deals for Hot Days</h2>
            <p className="mt-3 text-slate-600">Popular summer products are ready in one clean responsive store.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
