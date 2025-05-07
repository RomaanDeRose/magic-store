import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../api/getProductById"; // Adjust the import path as necessary

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productById = getProductById(id);
    productById.then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      <h1>Product Detail: {product ? product.title : "Loading..."}</h1>
      <p>This is the product detail page.</p>
    </div>
  );
}

export default ProductDetail;
