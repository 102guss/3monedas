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
    return <div>Cargando...</div>
  }
  if (error) {
  return <div>{error}</div>
}
  return (
    < >
      <input
        type="text"
        placeholder="Buscar criptomoneda"
        ref={searchInput}
        onChange={handleSearch}
        className="w-full bg-white px-4 py-3 text-lg rounded-lg"
      />
      {coinsList.length > 0 ?
        (
          <CoinsTable coins={coinsList} />
        ) :
        (
          <CoinsNotFound />
        )}

    </>
  );
};

export default CoinsContainer;
