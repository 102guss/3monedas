import { useRef, useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import coins from "../data/coins";
import Coin from "./Coin";

const CoinsContainer = () => {  
  const [coinsList, setCoinsList] = useState<CoinProps[]>(coins);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const searchValue = searchInput.current?.value || "";
    const newCoinsList = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setCoinsList(newCoinsList);
  };

  return (
    < >
      <input
        type="text"
        placeholder="Buscar criptomoneda"
        ref={searchInput}
        onChange={handleSearch}
      />
      <table className="w-full text-left border-collapse bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-gray-600 font-medium">Orden</th>
            <th className="px-4 py-2 text-gray-600 font-medium">Nombre</th>
            <th className="px-4 py-2 text-gray-600 font-medium">Código</th>
            <th className="px-4 py-2 text-gray-600 font-medium">Simbolo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {coinsList.map((coin) => (
            <Coin key={coin.order} {...coin} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinsContainer;
