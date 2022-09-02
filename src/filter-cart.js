import { React, useEffect, useState } from "react";
export default function FilterCart({ products, setProducts }) {
  const decreamentHandler = (id, quant) => {
    setProducts((prev) =>
      prev.map((f) => (f.id === id ? { ...f, quantity: quant } : f))
    );
  };
  const increamentHandler = (id, quant) => {
    setProducts((prev) =>
      prev.map((f) => (f.id === id ? { ...f, quantity: quant } : f))
    );
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
  }, [products]);

  return (
    <div>
      <div>
        {products.map((e) => (
          <div key={e.id}>
            {e.item}({e.price}){" "}
            <button onClick={() => decreamentHandler(e.id, e.quantity - 1)}>
              -
            </button>{" "}
            {e.quantity}{" "}
            <button onClick={() => increamentHandler(e.id, e.quantity + 1)}>
              +
            </button>
          </div>
        ))}
        <div>Total - {total}</div>
      </div>
    </div>
  );
}
