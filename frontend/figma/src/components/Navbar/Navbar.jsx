
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  
      const naviagte=useNavigate();

      const handlecart=()=>{
           naviagte("/cart");
      }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MERA <span>Bestie</span></h1>
      </div>
      <ul className="navbar-links">
        <li><a href="/home">HOME</a></li>
        <Link to="/shop"><a href="#shop">SHOP</a></Link>
        <li><a href="#occasions">OCCASIONS</a></li>
        <Link to="/about"><a href="#about">ABOUT</a></Link>
        <li to="/contact"><a href="/contact">CONTACT</a></li>
      </ul>
      <div className="navbar-icons">
        <i className="icon-cart"
           onClick={handlecart}
        >&#x1F6D2;</i>
        <i className="icon-heart">&#x2764;</i>
        <i className="icon-user">&#x1F464;</i>
      </div>
    </nav>
  );
};

export default Navbar;
