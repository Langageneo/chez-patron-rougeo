import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Entretien() {
  return (
    <>
      <Head>
        <title>Conseils d’Entretien | Chez Patron RougeO</title>
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <article className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Conseils d’Entretien des Freins</h1>
          <p className="mb-4">
            Vos freins sont essentiels pour votre sécurité. Voici quelques conseils pour les entretenir :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Faites vérifier vos freins tous les 10 000 km.</li>
            <li>Surveillez les bruits anormaux ou les vibrations.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
    }
    
