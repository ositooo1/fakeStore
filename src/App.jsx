import { Routes, Route } from "react-router-dom";
import Productos from "./Productos";
import ProductoDetalle from "./ProductoDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Productos />} />
      <Route path="/producto/:id" element={<ProductoDetalle />} />
    </Routes>
  );
}

export default App;
