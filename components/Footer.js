export default function Footer() {
  return (
    <footer className="bg-brand-black text-white p-6 text-center text-sm font-body">
      <div className="max-w-7xl mx-auto">
        <p className="mb-2">© 2025 WITTEL - Premium zonder label</p>
        <p>
          <a href="/algemene-voorwaarden" className="hover:text-brand-gold">Algemene voorwaarden</a> |
          <a href="/privacy" className="hover:text-brand-gold">Privacyverklaring</a> |
          <a href="/cookies" className="hover:text-brand-gold">Cookiebeleid</a>
        </p>
      </div>
    </footer>
  );
}