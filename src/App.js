import "./styles.css";
import { React, useState } from "react";
import { data } from "./data";
import FilterCart from "./filter-cart";
export default function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <FilterCart products={products} setProducts={setProducts} />
    </div>
  );
}
