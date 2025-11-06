import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chez Patron RougeO | Freinage & ABS à Abidjan</title>
        <meta name="description" content="Spécialiste en réparation et vente de pièces de freinage et systèmes ABS à Treichville, Abidjan." />
      </Head>
      <Header />
      <main>
        <section className="bg-red-600 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Votre Expert en Freinage à Abidjan</h1>
          <p className="text-xl mb-8">Diagnostic, réparation et pièces de rechange pour tous systèmes de freinage.</p>
        </section>
      </main>
      <Footer />
    </>
  );
    }
