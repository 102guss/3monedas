import type { CoinProps } from "../interfaces/Coin";
import { Link } from "react-router-dom";

const WatchlistCoin = ({ id, name, symbol, current_price, price_change_percentage_24h, image }: CoinProps) => {
  return (
    <tr className="coin-card [&>td]:px-8 [&>td]:py-6">
      <td className="px-10 py-6 text-lg text-gray-600 font-medium">{id}</td>
      <td className="px-10 py-6">
        <div className="flex items-center gap-5">
          <Link to={`/coin/${id}`} className="flex items-center gap-5">
            <img src={image} alt={symbol} className="w-14 h-14 rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 text-xl">{name}</span>
              <span className="text-lg text-gray-500 font-medium">{symbol}</span>
            </div>
          </Link>
        </div>
      </td>
      <td className="text-xl font-semibold">${current_price.toFixed(2)}</td>
      <td className={`text-xl font-semibold ${price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
        {price_change_percentage_24h >= 0 ? "+" : ""}{price_change_percentage_24h.toFixed(2)}%
      </td>
    </tr>
  );
};

export default WatchlistCoin;