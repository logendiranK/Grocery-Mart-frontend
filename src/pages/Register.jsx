import { useState } from "react";
import axios from "axios";
import "../Styles/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    mobilenumber: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://grocery-mart-backend.onrender.com/api/auth/register", form);
      alert("Registration Successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert("User already exists or registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister} className="auth-form">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <input type="text" name="mobilenumber" placeholder="Mobile Number" value={form.mobilenumber} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
