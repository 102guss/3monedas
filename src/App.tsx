import CoinsContainer from "./components/CoinsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import WatchlistContainer from "./components/WatchlistContainer";

function App() {
  return (
     <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoinsContainer />} />
          <Route path="watchlist" element={<WatchlistContainer />} />
          <Route path="coin/:id" element={<WatchlistContainer />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
