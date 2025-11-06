import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chez Patron RougeO | Expert en Freinage et ABS à Abidjan</title>
        <meta name="description" content="Réparation et vente de pièces de freinage et systèmes ABS à Treichville, Abidjan. Diagnostic, entretien et pièces de rechange." />
        <meta name="keywords" content="freinage, ABS, réparation freins, plaquettes, disques, Abidjan, Treichville" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main>
        {/* Section Hero */}
        <section className="bg-red-600 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Spécialiste Freinage & ABS à Abidjan</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Diagnostic, réparation et vente de pièces de freinage depuis 10 ans à Treichville.
            </p>
            <Link href="/contact" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Prendre Rendez-Vous
            </Link>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Diagnostic ABS</h3>
                <p className="text-gray-600">Vérification complète de votre système antiblocage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Révision Freins</h3>
                <p className="text-gray-600">Contrôle et remplacement des plaquettes et disques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Pièces de Rechange</h3>
                <p className="text-gray-600">Large stock de pièces d'origine et compatibles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-12 text-center bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Besoin d'un diagnostic urgent ?</h2>
            <p className="mb-6 text-gray-600">Notre équipe est disponible du lundi au samedi de 8h à 18h.</p>
            <Link href="/contact" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Nous Contacter
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
          }
    
