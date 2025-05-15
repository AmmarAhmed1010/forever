import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();

  // Here you would typically fetch product data based on productId
  // For now, we'll just display the productId
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      {/* Additional product details would go here */}
    </div>
  );
}

export default Product;