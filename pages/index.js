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
        <h2 className="text-3xl font-bold mb-4">Welcome to WITTEL</h2>
        <p className="text-lg">Premium kwaliteit, zonder het label.</p>
      </Layout>
    </>
  );
}