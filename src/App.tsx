import Coin from "./components/Coin"



function App() {

  return (
    <div>
     <Coin order={1} name="Bitcoin" symbol="BTC" price={100000} priceChange={10} code="BTC" />
     <Coin order={2} name="Ethereum" symbol="ETH" price={100000} priceChange={10} code="ETH" />
     <Coin order={3} name="Litecoin" symbol="LTC" price={100000} priceChange={10} code="LTC" />
     <Coin order={4} name="Bitcoin Cash" symbol="BCH" price={100000} priceChange={10} code="BCH" />
     <Coin order={5} name="Ripple" symbol="XRP" price={100000} priceChange={10} code="XRP" />
     <Coin order={6} name="Bitcoin Cash XRP" symbol="XRP" price={100000} priceChange={10} code="XRP" />
     <Coin order={7} name="Bitcoin" symbol="BTC" price={100000} priceChange={10} code="BTC" />
     <Coin order={8} name="Bitcoin Cash ABC" symbol="BCHABC" price={100000} priceChange={10} code="BCHABC" />
     <Coin order={9} name="Bitcoin Cash ABC" symbol="BCHABC" price={100000} priceChange={10} code="BCHABC" />
   </div>
  )
}

export default App
