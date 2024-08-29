import { useEffect, useState } from "react";
import { getProducts } from "../api/product-controller";
import { IProduct } from "../interfaces/product-interface";
import ConnectionError from "./connection-error";

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    document.title = "NeLtech - Products";

    getProducts()
      .then((response) => {
        if (response.success) {
          setError(false);
          setProducts(response.data);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <>
      {error ? (
        <ConnectionError />
      ) : (
        <div className="grid grid-cols-3 gap-4 px-24 py-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img
                src={product.img_link}
                alt={product.product_name}
                className="w-full h-60 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">
                {product.product_name}
              </h2>
              <p className="text-gray-500">{product.product_description}</p>
              <p className="text-blue-900 font-semibold mt-2">
                ${product.product_price}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
