import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CartItem({ product }) {
  const [amount, setAmount] = useState(product.amount);
  const { deleteProduct, decreaseAmount, increaseAmount, calculateTotal } =
    useGlobalContext();

  return (
    <li>
      {/* Adjust card layout for responsiveness */}
      <div className="card card-side bg-base-200 shadow-xl mb-5 flex-col md:flex-row">
        <figure>
          <img className="w-20 h-20" src={product.thumbnail} />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-2xl font-semibold">{product.title}</h1>
          <p>Amount: {product.amount}</p>
          <p>
            Product price:{" "}
            <span className="ml-1 font-semibold">
              {(product.price * product.amount).toFixed(2)}$
            </span>
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => deleteProduct(product.id)}
            >
              <FaTrash />
            </button>
            <div className="flex items-center gap-6">
              <button
                className="btn"
                onClick={() => increaseAmount(product.id)}
              >
                +
              </button>
              <p>{product.amount}</p>
              <button
                className="btn"
                onClick={() => {
                  if (product.amount === 1) {
                    deleteProduct(product.id);
                  }
                  decreaseAmount(product.id);
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
