import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Product() {
  const { addProduct } = useContext(GlobalContext);
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    addProduct({ ...data, amount });
  };
  return (
    <>
      {data && (
        // Adjust card width for responsiveness
        <div className="card w-full lg:w-210 bg-base-200 shadow-xl site-container">
          <div className="card-body">
            <h1 className="card-title">Title: {data.title}</h1>
            <p>{data.description}</p>
            <p>Category: {data.category}</p>
            <figure>
              <img src={data.thumbnail} alt="" />
            </figure>
            <h2>Tags: {data.tags}</h2>
            <h2>Rating: {data.rating}</h2>
            <p> Stock: {data.stock}</p>
            <p>Price: ${data.price}</p>
            <p>Discount: {data.discountPercentage}%</p>
            <div className="card-actions justify-end">
              <div className="flex items-center gap-4 mb-10">
                <button
                  onClick={() => setAmount(amount + 1)}
                  className="btn btn-secondary"
                >
                  +
                </button>
                <div>{amount}</div>
                <button
                  onClick={() => setAmount(amount - 1)}
                  className="btn btn-secondary"
                >
                  -
                </button>
                <button onClick={handleAdd} className="btn btn-secondary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
