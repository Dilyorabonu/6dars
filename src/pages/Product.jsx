import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Product() {
  const { color, changeColor } = useContext(GlobalContext);
  console.log(color);
  const { id } = useParams();
  const { data, setData, error } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  return (
    <>
      {data && (
        <div className="card w-210 bg-base-200 shadow-xl site-container">
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
                <button className="btn btn-secondary">+</button>
                <div>0</div>
                <button className="btn btn-secondary">-</button>

                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
