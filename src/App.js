import { Route, BrowserRouter, Routes } from "react-router-dom";
import ClientHome from "~/pages/Client-home/ClientHome";
import ClientCart from "~/pages/Client-cart/ClientCart";
import Client from "~/pages/Client";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Client />}>
            <Route index element={<ClientHome />} />
            <Route path="/cart" element={<ClientCart />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
