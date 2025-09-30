import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WITTEL - Premium zonder label</title>
        <meta name="description" content="Premium kleding zonder merk-label" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="max-w-4xl mx-auto text-center py-16">
          <h2 className="text-5xl font-display font-bold mb-4">Welcome to WITTEL</h2>
          <p className="text-xl font-body text-gray-600">Premium kwaliteit, zonder het label.</p>
        </section>
      </Layout>
    </>
  );
}