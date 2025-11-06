import Head from 'next/head';
import Header from '../../components/Header';  // Chemin corrigé
import Footer from '../../components/Footer';  // Chemin corrigé

export default function Entretien() {
  return (
    <>
      <Head>
        <title>Conseils d’Entretien | Chez Patron RougeO</title>
        <meta name="description" content="Conseils pour entretenir vos freins et systèmes ABS à Abidjan." />
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <article className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Conseils d’Entretien des Freins</h1>
          <p className="mb-4 text-gray-700">
            Vos freins et systèmes ABS sont essentiels pour votre sécurité. Voici nos conseils d’expert :
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Faites vérifier vos freins tous les 10 000 km ou une fois par an.</li>
            <li>Surveillez les bruits anormaux (grincements, sifflements).</li>
            <li>Contrôlez l’épaisseur des plaquettes et l’état des disques.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
    }
    
