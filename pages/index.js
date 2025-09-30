import Layout from '../components/Layout';
import Head from 'next/head';
import { categories } from '../data/categories';

export default function Home() {
  return (
    <>
      <Head>
        <title>WITTEL - Premium zonder label</title>
        <meta name="description" content="Premium kleding zonder merk-label" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero */}
        <section
          className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <h2 className="text-5xl font-display font-bold mb-4">Premium zonder label</h2>
            <p className="text-xl font-body">Ontdek de nieuwste deals</p>
            <a href="/sale" className="mt-4 inline-block bg-brand-gold text-black px-6 py-2 rounded font-bold hover:bg-yellow-500 transition">Shop Sale</a>
          </div>
        </section>

        {/* Categorieën */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h3 className="text-3xl font-display font-bold text-center mb-10">Categorieën</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <a key={cat.slug} href={`/${cat.slug}`} className="group block rounded-lg overflow-hidden shadow hover:shadow-xl transition">
                <img src={cat.img} alt={cat.name} className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <h4 className="text-xl font-display font-bold text-brand-black">{cat.name}</h4>
                  <p className="text-sm text-gray-600 font-body">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}