import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card card-hover overflow-hidden border border-orange-100 bg-white shadow-lg">
      <figure className="bg-orange-50">
        <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="card-title text-lg">{product.name}</h3>
            <p className="text-sm text-slate-500">{product.brand} • {product.category}</p>
          </div>
          <span className="badge badge-warning">⭐ {product.rating}</span>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <div className="card-actions mt-2 items-center justify-between">
          <span className="text-xl font-black text-orange-500">৳{product.price}</span>
          <Link href={`/products/${product.id}`} className="btn btn-primary btn-sm text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
}
