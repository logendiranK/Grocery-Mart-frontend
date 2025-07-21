import { useState } from 'react';
import itemsData from '../data/items';
import '../Styles/ItemPage.css';

const Items = () => {
  const [items] = useState(itemsData);

  const handleAddToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return alert("Login required");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const idx = cart.findIndex(ci => ci.item._id === item._id);
    if (idx > -1) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };


  return (
    <div className="item-page">
      <h2>Our Grocery Items</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div className="item-card" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="category">{item.category}</p>

            {item.weightOptions && item.weightOptions.length > 0 && (
              <select
                className="weight-select"
                onChange={(e) => handleAddToCart(item, e.target.value)}
              >
                {item.weightOptions.map((w, idx) => (
                  <option key={idx} value={w}>{w}</option>
                ))}
              </select>
            )}

            <p><strong>₹{item.price}</strong></p>

            <button onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
