import { Route, BrowserRouter, Routes } from "react-router-dom";
import ClientHome from "~/pages/Client-home/ClientHome";
import ClientCart from "~/pages/Client-cart/ClientCart";
import Client from "~/pages/Client";
import ClientOrder from "./pages/Client-order/ClientOrder";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ClientOrderDetail from "./pages/Client-order-detail/ClientOrderDetail";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <div className="App">
          <Routes>
            <Route path="/" element={<Client />}>
              <Route index element={<ClientHome />} />
              <Route path="/cart" element={<ClientCart />} />
              <Route path="/order" element={<ClientOrder />} />
              <Route path="/order/detail" element={<ClientOrderDetail />} />
            </Route>
          </Routes>
        </div>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
