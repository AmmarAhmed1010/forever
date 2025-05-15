import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const found = products.find(item => String(item._id) === String(id));
    setProductData(found || null);
  }, [id, products]);

  if (!productData) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        Product not found or loading...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(productData._id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={productData.image[0]}
          alt={productData.name}
          className="rounded-lg w-full max-w-md shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-gray-800">{productData.name}</h1>
        <p className="text-gray-600 text-sm">{productData.description}</p>

        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold text-red-600">
            {currency}
            {productData.price}
          </span>
          <span className="text-sm text-gray-500 line-through">
            {currency}
            {(productData.price * 1.2).toFixed(2)}
          </span>
        </div>

        <div>
          <span className="font-semibold text-gray-700">Sizes:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {productData.sizes.map((size, index) => (
              <span
                key={index}
                className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <button
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;