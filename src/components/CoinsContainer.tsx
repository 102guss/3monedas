import { useEffect, useRef, useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import CoinsTable from "./CoinsTable";
import CoinsNotFound from "./CoinsNotFound";

const CoinsContainer = () => {
  const [coinsList, setCoinsList] = useState<CoinProps[]>([]);
  const [coinsListOriginal, setCoinsListOriginal] = useState<CoinProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&x_cg_demo_api_key=CG-JWUb7ZnoaHYTgkqqjBviqXBV")
      .then(response => response.json())
      .then(data => {
        setCoinsList(data)
        setCoinsListOriginal(data)
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error)
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
