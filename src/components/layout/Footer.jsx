export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Chotiwala Maroubra</h3>
          <p>Authentic Indian cuisine delivered fresh.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/menu" className="hover:text-accent">Menu</a></li>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Locations</h4>
          <p>Maroubra Store<br />123 Beach St, Maroubra NSW 2035</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p>Phone: 02 9123 4567<br />Email: info@chotiwala.com.au</p>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-8 text-center">
        <p>&copy; 2025 Chotiwala Maroubra. All rights reserved.</p>
      </div>
    </footer>
  )
}