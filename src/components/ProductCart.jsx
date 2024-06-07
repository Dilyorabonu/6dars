import { Link } from "react-router-dom";

function ProductCart({ product }) {
  const { title, id, brand, description, category, thumbnail, price } = product;
  return (
    <Link to={`/product/${id}`}>
      <div>
        <h1 className="font-bold">{title}</h1>
        <p>{category}</p>
        <p>{description}</p>
        <img src={thumbnail} alt="" />
        <p>${price}</p>
      </div>
    </Link>
  );
}

export default ProductCart;
