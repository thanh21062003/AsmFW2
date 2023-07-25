
import { useState, useEffect } from "react";

import { getProducts } from "../../api/product";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/product.type";


export default function HomeProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      const { data } = await getProducts({});
      setProducts(data.data?.docs as IProduct[]);
    };
    fetchAllProduct();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            style={{
              width: "calc(33.33% - 16px)",
              margin: "8px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div className="card" >
            <Link to={`/products/${product._id}`}>
                    <img
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}

                      src={product.image}
                    />
                  </Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                {product.price}
                </p>
                <div className="red_button shop_now_button d-flex justify-content-center align-items-center "><a href="#">Add to card</a></div>
              </div>
            </div>

            

          </div>
        ))
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>

        </div>
      )}
    </div>
  );
}
