import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cart, products, currency } = useContext(ShopContext);

  const cartItems = Object.entries(cart).filter(([_, qty]) => qty > 0);

  if (cartItems.length === 0) {
    return <div className="text-center mt-10 text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <ul>
        {cartItems.map(([productId, qty]) => {
          const product = products.find(p => String(p._id) === String(productId));
          if (!product) return null;
          return (
            <li key={productId} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={product.image[0]} alt={product.name} className="w-16 h-16 rounded" />
                <div>
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-gray-500 text-sm">{currency}{product.price} x {qty}</div>
                </div>
              </div>
              <div className="font-bold">{currency}{(product.price * qty).toFixed(2)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;