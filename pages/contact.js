import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Chez Patron RougeO</title>
      </Head>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">Treichville, Rue 38 Avenue 15, Abidjan</p>
          <p className="mb-4">
            <a href="tel:+2250707141813" className="text-red-600">07 07 14 18 13</a>
          </p>
          <a href="mailto:abs.systemefreinage@gmail.com" className="text-red-600">abs.systemefreinage@gmail.com</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
