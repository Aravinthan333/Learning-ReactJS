import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "uderline",
      fontSize: isActive ? "17px" : "16px",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="order-summary" style={navLinkStyles}>
        Order Summary
      </NavLink>
      <NavLink to="products" style={navLinkStyles}>
        Products
      </NavLink>
      <NavLink to="users" style={navLinkStyles}>
        Users
      </NavLink>
    </nav>
  );
};

export default Navbar;
