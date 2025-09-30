export default function Header() {
  return (
    <header className="bg-brand-black text-white p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-display font-bold text-brand-gold">WITTEL</h1>
        <nav className="flex gap-6 font-body">
          <a href="/" className="hover:text-brand-gold transition">Sale</a>
          <a href="/heren" className="hover:text-brand-gold transition">Heren</a>
          <a href="/dames" className="hover:text-brand-gold transition">Dames</a>
          <a href="/kinderen" className="hover:text-brand-gold transition">Kinderen</a>
          <a href="/schoenen" className="hover:text-brand-gold transition">Schoenen</a>
          <a href="/accessoires" className="hover:text-brand-gold transition">Accessoires</a>
        </nav>
      </div>
    </header>
  );
}