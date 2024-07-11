import ProductCart from "./ProductCart";

function ProductsList({ data }) {
  return (
    // Use responsive grid layout
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.products.map((product) => {
        return <ProductCart key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
