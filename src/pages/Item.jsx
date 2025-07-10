import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/ItemPage.css";

const ItemPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/items");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching items:", err.message);
      }
    };
    fetchItems();
  }, []);
const handleAddToCart = async (itemId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user._id) return alert("Login required");

  try {
    await axios.post("http://localhost:5000/api/cart/add", {
      userId: user._id,
      itemId,
      quantity: 1
    });
    alert("Item added to cart!");
  } catch (err) {
    console.error("Add to cart failed", err.message);
  }
};


  return (
    <div className="item-page">
      <h2>Shop Grocery Items</h2>
      <div className="item-grid">
        {items.map((item) => (
          <div className="item-card" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p className="category">{item.category}</p>
            <select className="weight"> 
              {item.weightOptions.map((weight, i) => (
                <option key={i}>{weight}</option>
              ))}
            </select>
          <button onClick={() => handleAddToCart(item._id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
