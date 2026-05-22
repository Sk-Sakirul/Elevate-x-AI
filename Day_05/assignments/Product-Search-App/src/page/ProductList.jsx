import  { useCallback, useMemo, useState } from "react";
import products from "../data/products";
import ProductItem from "../components/ProductItem";

const ProductList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const allProducts = products || [];

   const addToCart = useCallback((product) => {
     setCart((prevCart) => [...prevCart, product]);
   }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [searchInput]);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0)
  }, [cart]);

  return (
    <>
      <h1>Product Search & Cart</h1>
      
      <input
        style={{ padding: "8px", margin: "20px 0" }}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search name here"
      />

      <div style={{ margin: "20px 0" }}>
        <p>Unrelated Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>
          Increment Counter
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <div style={{ borderLeft: "2px solid black", paddingLeft: "20px" }}>
        <h3>Cart Summary</h3>
        <p>Items in Cart: {cart.length}</p>
        <p>
          <strong>Total: ${cartTotal}</strong>
        </p>
      </div>
    </>
  );
};

export default ProductList;
