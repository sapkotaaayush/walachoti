import { Link } from 'react-router-dom';
import { menuCategories } from '../utils/menuData';

export default function Home() {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slideUp">
              Chotiwala<br />Maroubra
            </h1>
            <p className="text-xl md:text-2xl mb-8">Authentic Indian Flavours Delivered Fresh</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary text-lg px-10 py-4">Order Now</Link>
              <a href="tel:0291234567" className="bg-white text-primary px-10 py-4 rounded-full font-bold">Call 02 9123 4567</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {menuCategories.map(cat => (
            <Link key={cat.id} to="/menu" className="card-hover text-center">
              <div className="bg-gray-100 rounded-2xl p-8 text-6xl mb-4">{cat.icon}</div>
              <p className="font-semibold">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}