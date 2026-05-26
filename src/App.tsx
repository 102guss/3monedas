import { useRef, useState } from "react";
import Coin from "./components/Coin";
import coins from "./data/coins";
import type { CoinProps } from "./interfaces/Coin";

function App() {
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
    <main>
      <h1>Lista de criptomonedas</h1>
      <input
        type="text"
        placeholder="Buscar criptomoneda"
        ref={searchInput}
        onChange={handleSearch}
      />
      <div>
        {coinsList.map((coin) => (
          <Coin
            key={coin.order}
            order={coin.order}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.price}
            priceChange={coin.priceChange}
            code={coin.code}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
