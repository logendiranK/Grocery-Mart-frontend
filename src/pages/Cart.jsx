import { useEffect, useState } from "react";
import "../Styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userAddress = user?.address || "-";

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemove = (itemId) => {
    const newCart = cartItems.filter(ci => ci.item._id !== itemId);
    updateCart(newCart);
  };

  const handleBuy = (cartItem) => {
    alert(`Buying ${cartItem.item.name} for ₹${cartItem.item.price}`);
    handleRemove(cartItem.item._id);
  };

  return (
    <div className="cart-page-centered">
      <h2 className="cart-title">Cart ({cartItems.length} items)</h2>
      <div className="cart-items-row">
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((cartItem, i) => (
            <div key={i} className="cart-card-centered">
              <img
                src={cartItem.item.image}
                alt={cartItem.item.name}
                className="cart-card-img"
              />
              <div className="cart-card-details">
                <div className="cart-card-name">{cartItem.item.name}</div>
                <div className="cart-card-price">₹{cartItem.item.price}</div>
                <div className="cart-card-info">Category: {cartItem.item.category}</div>
                {cartItem.item.weightOptions && cartItem.item.weightOptions.length > 0 && (
                  <div className="cart-card-info">
                    Size: {cartItem.item.weightOptions[0]}
                  </div>
                )}
                <div className="cart-card-info">Qty: {cartItem.quantity}</div>
                <div className="cart-card-info">Address: {userAddress}</div>
              </div>
              <div className="cart-card-btns">
                <button className="cart-buy-btn" onClick={() => handleBuy(cartItem)}>
                  Buy
                </button>
                <button
                  className="cart-remove-btn"
                  onClick={() => handleRemove(cartItem.item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
