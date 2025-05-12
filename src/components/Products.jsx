import Product from "./Product";

function Products({ products }){
    return (
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
}

export default Products;