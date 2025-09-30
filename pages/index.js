import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>WITTEL - Premium zonder label</title>
        <meta name="description" content="Premium kleding zonder merk-label" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black text-white p-4">
        <h1 className="text-2xl font-bold text-yellow-400">WITTEL</h1>
        <nav className="flex gap-4 mt-2">
          <a href="/" className="hover:text-yellow-400">Sale</a>
          <a href="/heren" className="hover:text-yellow-400">Heren</a>
          <a href="/dames" className="hover:text-yellow-400">Dames</a>
          <a href="/kinderen" className="hover:text-yellow-400">Kinderen</a>
          <a href="/schoenen" className="hover:text-yellow-400">Schoenen</a>
          <a href="/accessoires" className="hover:text-yellow-400">Accessoires</a>
        </nav>
      </header>

      <main className="p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to WITTEL</h2>
        <p className="text-lg">Premium kwaliteit, zonder het label.</p>
      </main>

      <footer className="bg-black text-white p-4 text-center text-sm">
        <p>© 2025 WITTEL - Premium zonder label</p>
        <p>Algemene voorwaarden | Privacyverklaring | Cookiebeleid</p>
      </footer>
    </>
  )
}