import { useEffect, useState } from "react";
import { COINGECKO_API_KEY, URL_API, URL_COINS } from "../constants/api";
import { useParams } from "react-router-dom";

const CoinContainer = () => {
  const [Coin, setCoin] = useState(null);
   const { id } = useParams()

  useEffect(() => {
    fetch(
      `${URL_API}/${URL_COINS}&x_cg_demo_api_key=${COINGECKO_API_KEY}&ids=${id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCoin(data[0]);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [id]);

  return (
    <div>
      <h1>Coin Container</h1>           
      <p>{JSON.stringify(Coin)}</p>
    </div>
  );
};

export default CoinContainer;
