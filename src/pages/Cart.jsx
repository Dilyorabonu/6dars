import { useGlobalContext } from "../hooks/useGlobalContext";
import CartItem from "./CartItem";

function Cart() {
  const { total, products, deleteProduct, totalPrice } = useGlobalContext();

  return (
    <ul id="menu" className="site-container">
      {!products.length && <h1 className="no-products">No Product yet...</h1>}
      {products.length > 0 &&
        products.map((product) => {
          return <CartItem key={product.id} product={product} />;
        })}
      {products.length > 0 && (
        <p id="totalPrice" className="font-medium text-end text-2xl mr-8">
          Total price:{" "}
          <span className="font-bold">{totalPrice.toFixed(2)}$</span>
        </p>
      )}
    </ul>
  );
}

export default Cart;
