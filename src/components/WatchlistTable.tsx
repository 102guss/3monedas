import type { CoinProps } from "../interfaces/Coin";
import WatchlistCoin from "./WatchlistCoin";

const WatchlistTable = ({ coins }: { coins: CoinProps[] }) => {
  return (
    <>
      <table className="w-full text-left border-collapse bg-white text-xl">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-8 py-5 text-gray-600 font-semibold text-lg">Orden</th>
            <th className="px-8 py-5 text-gray-600 font-semibold text-lg">Nombre</th>
            <th className="px-8 py-5 text-gray-600 font-semibold text-lg">Precio</th>
            <th className="px-8 py-5 text-gray-600 font-semibold text-lg">Cambio 24h</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {coins.map((coin) => (
            <WatchlistCoin
              id={coin.id}
              key={coin.symbol}
              name={coin.name}
              symbol={coin.symbol}
              current_price={coin.current_price}
              price_change_percentage_24h={coin.price_change_percentage_24h}
              image={coin.image}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WatchlistTable;