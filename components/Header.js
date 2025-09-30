export default function Header() {
  return (
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
  );
}