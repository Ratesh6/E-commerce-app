// frontend/src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "" });

  // Use backend service name from Docker Compose
  const BACKEND_URL = "http://backend:3000/products";

  // Fetch products
  const loadProducts = async () => {
    try {
      const res = await axios.get(BACKEND_URL);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Add product
  const addProduct = async () => {
    try {
      await axios.post(BACKEND_URL, form);
      loadProducts();
      setForm({ name: "", price: "", description: "" });
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>E-Commerce App</h1>

      <h2>Add Product</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button onClick={addProduct}>Add</button>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            <strong>{p.name}</strong> - ₹{p.price} <br />
            {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
