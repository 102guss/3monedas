import { useRef, useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import coins from "../data/coins";
import CoinsTable from "./CoinsTable";

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
        className="w-full bg-white px-4 py-3 text-lg rounded-lg"
      />
       <CoinsTable coins={coinsList} />

    </>
  );
};

export default CoinsContainer;
