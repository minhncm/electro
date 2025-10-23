import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Client from "./pages/Client";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Client />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
