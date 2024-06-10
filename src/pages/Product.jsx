import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
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
            <h2>Brand: {data.brand}</h2>
            <h2>Rating: {data.rating}</h2>
            <figure>
              <img src={data.thumbnail} alt="" />
            </figure>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
            <p>Discount: {data.discountPercentage}%</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
