import Coin from "./components/Coin"
import coins from "./data/coins"



function App() {

  return (
    <div>
        {coins.map(coin => (
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
   </div>
  )
}

export default App
