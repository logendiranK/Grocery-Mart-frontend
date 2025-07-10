import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-section">
        <h1>Welcome to GroceryMart</h1>
        <p>
          Your favorite online store for fresh groceries, daily needs, and
          household essentials!
        </p>
        <Link to="/Item" className="shop-now-btn">
          Shop Now
        </Link>
      </section>
      <section className="features-section">
        <h2>Why Shop With Us?</h2>
        <div className="features">
          <div className="features-box">
            <img
              src="https://img.icons8.com/color/96/shopping-cart.png"
              alt="Easy Ordering"
            />
            <h3>Easy Ordering</h3>
            <p>
              Just a few clicks to add groceries to your cart and place an
              order.
            </p>
          </div>
          <div className="features-box">
            <img src="https://img.icons8.com/color/96/delivery.png" alt="Fast Delivery" />
            <h3>Fast Delivery</h3>
            <p>Get your items delivered to your doorstep within hours.</p>
          </div>
          <div className="features-box">
            <img src="https://img.icons8.com/color/96/natural-food.png" alt="Fresh Products" />
            <h3>Fresh Products</h3>
            <p>We provide only the best and freshest groceries available.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
