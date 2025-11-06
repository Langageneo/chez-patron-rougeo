import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">Patron RougeO</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-700 hover:text-red-600">Accueil</Link></li>
            <li><Link href="/services" className="text-gray-700 hover:text-red-600">Services</Link></li>
            <li><Link href="/pieces" className="text-gray-700 hover:text-red-600">Pièces</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
    }
    
