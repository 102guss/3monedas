import { useRef, useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import WatchlistTable from "./WatchlistTable";
import CoinsNotFound from "./CoinsNotFound";
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api"

const WatchlistContainer = () => {
  const [coinsList, setCoinsList] = useState<CoinProps[]>(() => {
    // No cargar datos inicialmente, solo inicializar como array vacío
    return [];
  });
  const [coinsListOriginal, setCoinsListOriginal] = useState<CoinProps[]>([]);
  const [loading, setLoading] = useState<boolean>(() => {
    // Verificar si hay favoritos para determinar si debe mostrar loading
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.length > 0;
  });
  const [error, setError] = useState<string | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);




  // Inicialización lazy - se ejecuta solo una vez cuando sea necesario
  if (!initialized) {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
    if (favorites.length > 0) {
      // Cargar favoritos al inicializar
      fetch(`${URL_API}/${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}&ids=${favorites.join(",")}`)
        .then(response => response.json())
        .then(data => {
          setCoinsList(data);
          setCoinsListOriginal(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error al obtener los datos:", error);
          setError("Error al obtener los datos");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    
    setInitialized(true);
  }

  const handleSearch = () => {
    const searchValue = searchInput.current?.value || "";
    const newCoinsList = coinsListOriginal.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setCoinsList(newCoinsList);
  };
  const handleClearFavorites = () => {
    localStorage.removeItem("favorites");
    setCoinsList([]);
    setCoinsListOriginal([]);
  };
  if (loading) {
    return <div>Cargando...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <div className="flex justify-end">
        <button onClick={handleClearFavorites} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md mb-4 text-sm">Limpiar favoritos</button>
      </div>
      <input
        type="text"
        placeholder="Buscar criptomoneda"
        ref={searchInput}
        onChange={handleSearch}
        className="w-full bg-white px-4 py-3 text-lg rounded-lg"
      />
      {coinsList.length > 0 ?
        (
          <WatchlistTable coins={coinsList} />
        ) :
        (
          <CoinsNotFound />
        )}
    </>
  );
};

export default WatchlistContainer;