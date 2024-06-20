import { FaTrash } from "react-icons/fa6";
import { useGlobalContext } from "../hooks/useGlobalContext";
import CartItem from "./CartItem";

function Cart() {
  const { total, products, deleteProduct } = useGlobalContext();
  return (
    <div className="site-container">
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
      </ul>
    </div>
  );
}

export default Cart;
