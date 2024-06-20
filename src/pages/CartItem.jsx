import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CartItem({ product }) {
  const { deleteProduct, decreaseAmount, increaseAmount } = useGlobalContext();
  const [amount, setAmount] = useState(0);

  useEffect(() => {}, [amount]);

  return (
    <li>
      <div className="card card-side bg-base-200 shadow-xl mb-5">
        <figure>
          <img className="h-20" src={product.images} />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1>
          <h2>Price: ${product.price}</h2>
          <h2>discountPercentage: {product.discountPercentage}%</h2>
          <p>Amount: {product.amount}</p>
          <div className="card-actions justify-end">
            <div className="flex items-center gap-6">
              <button onClick={() => increaseAmount(product.id)}>+</button>
              <p>{product.amount}</p>
              <button onClick={() => decreaseAmount(product.id)}>-</button>
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => deleteProduct(product.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
