import { useState } from "react";
import type { CoinProps } from "../interfaces/Coin";
import { Link } from "react-router-dom";
const Coin = ({ id, name, symbol, current_price, price_change_percentage_24h, image }: CoinProps) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(!isFavorite);
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
  };

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

      <td className="text-center">
        <button 
          onClick={handleFavorites}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
          title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {isFavorite ? (
            <svg 
              className="w-6 h-6 text-yellow-400 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ) : (
            <svg 
              className="w-6 h-6 text-gray-400 hover:text-yellow-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
              />
            </svg>
          )}
        </button>
      </td>
    </tr>
  );
};

export default Coin;    
