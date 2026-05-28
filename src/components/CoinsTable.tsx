import type { CoinProps } from "../interfaces/Coin";
import Coin from "./Coin";

const CoinsTable = ({ coins }: { coins: CoinProps[] }) => {
  return (
    <>
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
        {coins.map((coin) => (
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
      </tbody>
      </table>
      
    </>
  );
};

export default CoinsTable
