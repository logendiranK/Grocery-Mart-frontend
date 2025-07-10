import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h2>Where freshness meets convenience — welcome to GroceryMart</h2>
      </div>

      <div className="about-main">
        <div className="about-left">
          <h3 className="highlight-title">Our Story</h3>
          <div className="line" />
          <p>
            Founded in 2024, <strong>GroceryMart</strong> started with a mission to make daily grocery
            shopping simpler, faster, and fresher. Whether you're restocking essentials or grabbing
            last-minute veggies, we bring it all to your doorstep with just a few clicks.
          </p>
          <p>
            Our platform is built to serve busy individuals and families who value time and quality.
            We ensure reliable delivery, competitive pricing, and the best quality products across all categories.
          </p>
          <p>
            At GroceryMart, we believe grocery shopping should be stress-free and joyful — not a chore.
          </p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span>🥬</span>
          <h4>Farm Fresh</h4>
          <p>Daily-sourced vegetables and fruits directly from trusted farms.</p>
        </div>
        <div className="feature-card">
          <span>🛒</span>
          <h4>Wide Range</h4>
          <p>Choose from staples, snacks, dairy, pulses, oils, and more.</p>
        </div>
        <div className="feature-card">
          <span>🚚</span>
          <h4>Fast Delivery</h4>
          <p>On-time delivery with real-time tracking, every single time.</p>
        </div>
        <div className="feature-card">
          <span>💳</span>
          <h4>Secure Payment</h4>
          <p>Multiple payment options with 100% transaction security.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
