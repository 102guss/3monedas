interface CourseProps {
  order: number;
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
  code: string;
}



const Coin = ({order, name, symbol, price, priceChange, code}: CourseProps) => {
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
