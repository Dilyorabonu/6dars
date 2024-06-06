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
        <div className="card w-96 bg-base-100 shadow-xl site-container">
          <div className="card-body">
            <h1 className="card-title font-bold">{data.title}</h1>
            <h2>{data.brand}</h2>
            <figure>
              <img src={data.thumbnail} alt="" />
            </figure>
            <p>{data.description}</p>
            <p>${data.price}</p>
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
