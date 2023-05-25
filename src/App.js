import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/main/main";
import Cart from "./components/cart/cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Main />}></Route>
        <Route path = "/cart" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
