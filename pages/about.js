import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>À Propos | Chez Patron RougeO</title>
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">À Propos</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Chez Patron RougeO, nous sommes spécialisés dans la réparation et la vente de pièces de freinage depuis 10 ans à Treichville, Abidjan.
        </p>
      </main>
      <Footer />
    </>
  );
    }
