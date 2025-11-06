import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const services = [
  { id: 1, title: "Diagnostic ABS", description: "Vérification complète de votre système ABS." },
  { id: 2, title: "Révision des Freins", description: "Contrôle et remplacement des plaquettes et disques." },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Nos Services | Chez Patron RougeO</title>
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Nos Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
