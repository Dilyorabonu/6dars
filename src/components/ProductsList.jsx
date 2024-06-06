import ProductCart from "./ProductCart";

function ProductsList({ data }) {
  return (
    <div>
      {data.products.map((product) => {
        return <ProductCart key={product.id} product= {product}/>;
      })}
    </div>
  );
}

export default ProductsList;
