import { useState } from "react";
import type { CoinProps } from "../interfaces/Coin";

const Coin = ({ order, name, symbol, price, priceChange, code }: CoinProps) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
   <tr className="coin-card [&>td]:px-4 [&>td]:py-3">
      <td>{order}</td>
      <td>
        <div className="flex items-center gap-3">
          <img src={symbol} alt={code} className="w-10 h-10 rounded-full" />
          <div>
            <span className="font-semibold">{name}</span>
            <span className="text-sm text-gray-500">{code}</span>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{priceChange}</td>
      <td>
        <button onClick={handleFavorites}>
          {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </td>
    </tr>
  );
};

export default Coin;
