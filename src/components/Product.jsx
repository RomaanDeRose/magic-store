import { Link } from "react-router";
import Tags from "./Tags";

function Product({ product }){
    return (
      <div className="relative w-70 h-84 justify-self-center rounded-lg border-1 border-gray-100 p-2">
        <span className="absolute top-4 left-3 bg-red-100 text-red-500 text-xs font-medium p-1 rounded-lg">
          -{product.discountPercentage}%
        </span>
        <article className="w-full h-1/2 rounded-md bg-blue-100/30">
          <img
            src={product.images[0]}
            alt={product.title}
            className="size-full object-contain"
          />
        </article>
        <div className="flex flex-col gap-1 h-[28%] mt-2 mb-1">
          <h3 className="text-lg font-bold line-clamp-1">{product.title}</h3>
          <div className="flex gap-2">
            <Tags tags={product.tags} />
          </div>
          <p
            className="text-gray-400 text-[12.5px] line-clamp-2"
            title={product.description}
          >
            {product.description}
          </p>
        </div>
        <p className="text-gray-400 text-xs my-1.5">
          Envío en 3-5 días hábiles
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-xs line-through -mb-1 pl-0.5">
              $
              {(
                (product.price / (100 - product.discountPercentage)) *
                100
              ).toFixed(2)}
            </p>
            <p className="text-xl font-bold text-gray-900">${product.price}</p>
          </div>
          <Link
            to={`./${product.id}`}
            className="bg-blue-500 text-md text-white font-medium text-center px-2 py-1 rounded transition-colors hover:bg-blue-600"
          >
            View product
          </Link>
        </div>
      </div>
    );
}

export default Product;