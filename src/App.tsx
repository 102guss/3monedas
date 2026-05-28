import Header from "./components/Header";
import CoinsContainer from "./components/CoinsContainer";

function App() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <h1>Lista de criptomonedas</h1>
        <div className="coins-list">
          <CoinsContainer />
        </div>
      </main>
    </>
  );  
}

export default App;
