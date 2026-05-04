export default function Footer() {
  return (
    <footer className="mt-20 border-t border-orange-100 bg-white/70">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black text-orange-500">☀️ SunCart</h3>
          <p className="mt-2 text-sm text-slate-600">Your friendly store for summer essentials, cooling gadgets, and outdoor comfort.</p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <p className="mt-2 text-sm text-slate-600">Home • Products • Profile • Summer Tips</p>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p className="mt-2 text-sm text-slate-600">support@suncart.local<br />Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
