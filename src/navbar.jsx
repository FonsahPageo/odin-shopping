import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <p>My Shop</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>
            <Link to="">Check Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { NavBar };
