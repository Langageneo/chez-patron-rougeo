import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">Treichville, Rue 38 Avenue 15, Abidjan</p>
        <p className="mb-4">
          <a href="tel:+2250707141813" className="text-red-400 hover:underline">07 07 14 18 13</a>
        </p>
        <p>&copy; {new Date().getFullYear()} Chez Patron RougeO</p>
      </div>
    </footer>
  );
}
