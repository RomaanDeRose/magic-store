import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts";
import Loader from "../components/Loader";
import Products from "../components/Products";
import Navbar from "../components/Navbar";

function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const allproducts = getProducts();

    allproducts.then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-20 md:px-0">
        {loading && <Loader />}
        {!loading && products.length > 0 && <Products products={products} />}
      </div>
    </>
  );
}

export default AllProducts;
