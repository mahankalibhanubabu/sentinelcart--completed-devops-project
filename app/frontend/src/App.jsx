import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <h1>SentinelCart</h1>
      <p>Simple e-commerce application</p>

      {error && <p>{error}</p>}

      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;