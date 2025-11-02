import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setCargando(false);
      }
    };
    obtenerProductos();
  }, []);

  if (cargando) return <p style={{ textAlign: "center" }}>Cargando productos...</p>;

  return (
    <div className="product-grid">
      {productos.map((p) => (
        <div className="product-card" key={p.id}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p><strong>${p.price}</strong></p>
          <Link to={`/producto/${p.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default Productos;
