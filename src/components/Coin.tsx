import { useState } from "react";
import type { CoinProps } from "../interfaces/Coin";

const Coin = ({ order, name, symbol, price, priceChange, code }: CoinProps) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const addToFavorites = () => {
    setIsFavorite(!isFavorite);
    // alert("Añadido a favoritos");
  };

  return (
    <div className="bg-blue-500">
      <h1>{order}</h1>
      <h2>{name}</h2>
      <p>{symbol}</p>
      <p>{price}</p>
      <p>{priceChange}</p>
      <p>{code}</p>
      <button onClick={addToFavorites}>
        {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default Coin;
