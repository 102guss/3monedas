import type { CoinProps } from "../interfaces/CoinProps";




const Coin = ({order, name, symbol, price, priceChange, code}: CoinProps) => {
      const addToFavorites = () => { if(name === "Bitcoin") { alert("Bitcoin es la mejor criptomoneda") } }
    return (
        <div>
            <h1>{order}</h1>
            <h2>{name}</h2>
            <p>{symbol}</p>
            <p>{price}</p>
            <p>{priceChange}</p>
            <p>{code}</p>
             <button onClick={addToFavorites}>Agregar a favoritos</button>
        </div>
    );
}


export default Coin
