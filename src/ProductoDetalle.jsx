import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProducto(data);
      } catch (error) {
        console.error("Error al obtener producto:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);

  if (cargando) return <p style={{ textAlign: "center" }}>Cargando producto...</p>;
  if (!producto) return <p style={{ textAlign: "center" }}>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <img src={producto.image} alt={producto.title} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p><strong>Calificación:</strong> {producto.rating.rate} ⭐ ({producto.rating.count} opiniones)</p>
      <Link to="/" className="back-button">Volver a productos</Link>
    </div>
  );
}

export default ProductoDetalle;
