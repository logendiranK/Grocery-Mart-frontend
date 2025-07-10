import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = "/"; 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">🛒 GroceryMart</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/item">Items</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>

        {user ? (
          <>
            <li className="navbar-user">Hi, {user.name}</li>
            <li>
              <button
                onClick={handleLogout}
                className="btn"
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
