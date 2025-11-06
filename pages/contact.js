import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Chez Patron RougeO - Freinage & ABS à Abidjan</title>
        <meta name="description" content="Contactez Chez Patron RougeO pour un diagnostic ou une réparation de freins et ABS à Treichville, Abidjan." />
      </Head>

      <Header />

      <main className="container mx-auto py-12 px-4">
        {/* Section Coordonnées */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contactez-Nous</h1>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Chez Patron RougeO</h2>
            <p className="mb-2 text-gray-700">
              <strong>Adresse :</strong> Treichville, Rue 38 Avenue 15, Abidjan (près du marché de Treichville)
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Téléphone :</strong>
              <a href="tel:+2250707141813" className="text-red-600 hover:underline"> 07 07 14 18 13</a>
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Email :</strong>
              <a href="mailto:abs.systemefreinage@gmail.com" className="text-red-600 hover:underline"> abs.systemefreinage@gmail.com</a>
            </p>
            <p className="text-gray-700">
              <strong>Horaires :</strong> Lundi - Samedi : 8h00 - 18h00
            </p>
          </div>
        </section>

        {/* Section Formulaire */}
        <section className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Envoyez-nous un message</h2>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nom complet</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Téléphone</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Votre numéro"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Type de véhicule</label>
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Sélectionnez...</option>
                <option value="voiture">Voiture</option>
                <option value="moto">Moto</option>
                <option value="camion">Camion</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
                placeholder="Décrivez votre problème (ex: bruit de frein, voyants ABS allumés...)"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Envoyer le message
            </button>
          </form>
        </section>

        {/* Section Carte (optionnelle) */}
        <section className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Où nous trouver ?</h2>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              [Carte Google Maps ici - À configurer ultérieurement]
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
    }
    
