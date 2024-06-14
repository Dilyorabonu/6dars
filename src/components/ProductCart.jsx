import { Link } from "react-router-dom";

function ProductCart({ product }) {
  const { title, id, brand, description, category, thumbnail, price } = product;
  return (
    <Link to={`/product/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={thumbnail} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-secondary">Price: ${price}</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
