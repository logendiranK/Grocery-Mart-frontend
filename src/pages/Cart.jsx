import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    if (!user || !user._id) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${user._id}`);
      const items = res.data.cartItems || [];
      setCartItems(items);
    } catch (err) {
      console.error("Error fetching cart:", err.message);
    }
  };

  const handleRemove = async (itemId) => {
    if (!user || !user._id) return;
    try {
      await axios.delete(`http://localhost:5000/api/cart/${user._id}/${itemId}`);
      fetchCart();
    } catch (err) {
      alert("Failed to remove item");
    }
  };

  const handleBuy = (item) => {
    alert(`Purchased: ${item.itemId?.name || "Item"}`);
    handleRemove(item.itemId?._id);
  };

  
  const validCartItems = cartItems.filter(item => item.itemId && item.itemId.name);

  return (
    <div className="cart-page-centered">
      <h2 className="cart-title">
        Cart ({validCartItems.length} {validCartItems.length === 1 ? "item" : "items"})
      </h2>
      <div className="cart-items-row">
        {validCartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          validCartItems.map((item, i) => (
            <div className="cart-card-centered" key={i}>
              <img
                src={item.itemId.image || "https://via.placeholder.com/180x180?text=No+Image"}
                alt={item.itemId.name}
                className="cart-card-img"
              />
              <div className="cart-card-details">
                <div className="cart-card-name">{item.itemId.name}</div>
                <div className="cart-card-price">₹{item.itemId.price || "-"}</div>
                <div className="cart-card-info">Category: {item.itemId.category || "-"}</div>
                <div className="cart-card-info">Weight Options: {item.itemId.weightOptions ? item.itemId.weightOptions.join(', ') : "-"}</div>
                <div className="cart-card-info">Address: {item.address || user?.address || "-"}</div>
                <div className="cart-card-btns">
                  <button className="cart-buy-btn" onClick={() => handleBuy(item)}>Buy</button>
                  <button className="cart-remove-btn" onClick={() => handleRemove(item.itemId._id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
