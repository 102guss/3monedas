import { useRef, useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import coins from "../data/coins";
import Coin from "./Coin";

const CoinsTable = () => {
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
    <>
      <input
        type="text"
        placeholder="Buscar criptomoneda"
        ref={searchInput}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Orden</th>
            <th>Nombre</th>
            <th>Código</th>
            <th>Simbolo</th>
          </tr>
        </thead>
        <tbody>
          {coinsList.map((coin) => (
            <Coin key={coin.order} {...coin} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CoinsTable;
