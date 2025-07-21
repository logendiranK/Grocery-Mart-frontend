import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Home from './pages/Home';
import Footer from './pages/Footer';
import About from "./pages/About";
import Cart from "./pages/Cart";
import Register from './pages/Register';
import Login from "./pages/Login";
import Item from "./pages/Item";

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Item' element={<Item/>}/>
        <Route path='/Cart'element={<Cart/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;
