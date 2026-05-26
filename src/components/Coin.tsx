import type { CoinProps } from "../interfaces/CoinProps";




const Coin = ({order, name, symbol, price, priceChange, code}: CoinProps) => {
    return (
        <div>
            <h1>{order}</h1>
            <h2>{name}</h2>
            <p>{symbol}</p>
            <p>{price}</p>
            <p>{priceChange}</p>
            <p>{code}</p>
        </div>
    );
}


export default Coin
