const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-[#2B2159]">
    <span className="text-xl font-bold text-white">CryptoAPP</span>
    <nav className="flex gap-6">
      <a href="#overview" className="text-white hover:text-gray-300">Overview</a>
      <a href="#watchlist" className="text-white hover:text-gray-300">Watchlist</a>
    </nav>
    <button>Iniciar sesión</button>
  </header>
)

export default Header