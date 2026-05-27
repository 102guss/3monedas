import Header from "./components/Header";
import CoinsTable from "./components/CoinsTable";

function App() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <h1>Lista de criptomonedas</h1>
        <div className="coins-list">
          <CoinsTable />
        </div>
      </main>
    </>
  );
}

export default App;
