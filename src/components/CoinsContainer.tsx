import { useEffect, useRef, useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import CoinsTable from "./CoinsTable";
import CoinsNotFound from "./CoinsNotFound";
import { URL_API, URL_COINS,COINGECKO_API_KEY } from "../constants/api";

const CoinsContainer = () => {
  const [coinsList, setCoinsList] = useState<CoinProps[]>([]);
  const [coinsListOriginal, setCoinsListOriginal] = useState<CoinProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
     fetch( `${URL_API}/${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}` )
      .then(response => response.json())
      .then(data => {
        setCoinsList(data)
        setCoinsListOriginal(data)
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error)
        setError("Error al obtener los datos")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleSearch = () => {
    const searchValue = searchInput.current?.value || ""; 
    const newCoinsList = coinsListOriginal.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setCoinsList(newCoinsList);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-600 text-lg">Cargando monedas...</div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    )
  }
  
  return (  
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Criptomonedas</h2>
        <input
          type="text"
          placeholder="Buscar criptomoneda por nombre..."
          ref={searchInput}
          onChange={handleSearch}
          className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {coinsList.length > 0 ? (
          <CoinsTable coins={coinsList} />
        ) : (
          <CoinsNotFound />
        )}
      </div>
    </div>
  );
};

export default CoinsContainer;
