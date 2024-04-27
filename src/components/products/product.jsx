// src/components/products/product.jsx

import { Link } from "react-router-dom";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function Product({ products }) {
  let { id } = useParams();
  const [product] = products.filter((product) => product.id === id);

  const navigate = useNavigate();
  const mockBuyNow = () => {
    alert(
      "You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let's go back to the home page!"
    );
    navigate("/");
  };
  if (product) {
    return (
      <section>
        <h5>{product.name}</h5>
        <img src={product.image} alt={product.name} />
        <p>{product.type}</p>
        <p>{product.style}</p>
        <p>${product.price}</p>
        <button onClick={mockBuyNow}>Buy Now!</button>
      </section>
    );
  }
  return <h1>No products found</h1>;
}
