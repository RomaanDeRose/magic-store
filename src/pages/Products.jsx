import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getProducts } from "../api/getProducts"; // Adjust the import path as necessary

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const allproducts = getProducts();

    allproducts.then((data) => {
      setProducts(data);
    });
  }, []);

  console.log(products);

  return (
    <div>
      {products
        ? products.map((product) => (
            <Link to={`./${product.id}`} key={product.id}>
              {product.title}
            </Link>
          ))
        : "Loading..."}
    </div>
  );
}

export default Products;
