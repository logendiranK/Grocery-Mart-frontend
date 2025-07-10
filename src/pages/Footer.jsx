import '../Styles/Footer.css';
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-slides">
            <h1>Grocery</h1>
            <h2>Mart</h2>
            <p>203/9,A.K.M Road, Oragadam</p>
            <p>Ambattur</p>
            <p>Chennai</p>
            <p>TamilNadu - 600 050</p>
        </div>
        <div className='footer-slides'>
            <h4>Need Help</h4>
            <p>8090823456/04443456644</p>
        </div>
        <div className='footer-slides'>
            <h4>Categories</h4>
            <p>Fruits & Vegetables |Staples |Snacks & Namkeens |Beverages |Chilled & Dairy Foods |Ready To Cook |Ready To Eat |Baby Care |Household Essentials |Cleaning Needs |Feminine Care |Health Care |Personal Care |Stationaries |Skin Care |Oral Care |Men's Grooming |Creams & Lotions |Crockeries</p>
            <h4>Links</h4>
            <Link to="/">Home</Link>  
            <Link to="/About">About</Link>
            <Link to="/Feedback">Feedback</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
