import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const pieces = [
  { id: 1, nom: "Cerveau ABS", image: "/images/cerveau-abs.jpg" },
  { id: 2, nom: "Plaquettes + Disques", image: "/images/plaquettes-disques.jpg" },
];

export default function Pieces() {
  return (
    <>
      <Head>
        <title>Pièces de Rechange | Chez Patron RougeO</title>
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Pièces de Rechange</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pieces.map((piece) => (
            <div key={piece.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={piece.image} alt={piece.nom} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{piece.nom}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
