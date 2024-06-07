import ProductCart from "./ProductCart";

function ProductsList({ data }) {
  return (
    <div className="grid grid-cols-3 gap-5" >
      {data.products.map((product) => {
        return <ProductCart key={product.id} product= {product}/>;
      })}
    </div>
  );
}

export default ProductsList;