import { useState } from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";
import "./styles.css";
import bag from "./images/bag.jpg";
import cake from "./images/cake.jpg";
import car from "./images/car.jpg";
import dog from "./images/dog.jpg";
import headphones from "./images/headphones.jpg";
import house from "./images/house.jpg";
import juice from "./images/juice.jpg";
import laptop from "./images/laptop.jpg";
import shoe from "./images/shoe.jpg";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Bag",
    description: "A stylish and durable travel bag.",
    image: bag,
  },
  {
    name: "Cake",
    description: "Delicious chocolate cake for any occasion.",
    image: cake,
  },
  {
    name: "Car",
    description: "A sleek and powerful sports car.",
    image: car,
  },
  {
    name: "Dog",
    description: "A friendly golden retriever puppy.",
    image: dog,
  },
  {
    name: "Headphones",
    description: "Noise-cancelling wireless headphones.",
    image: headphones,
  },
  {
    name: "House",
    description: "A modern house with a beautiful garden.",
    image: house,
  },
  {
    name: "Juice",
    description: "Fresh and organic orange juice.",
    image: juice,
  },
  {
    name: "Laptop",
    description: "A high-performance multi-purpose laptop.",
    image: laptop,
  },
  {
    name: "Shoe",
    description: "Comfortable running shoes for all terrains.",
    image: shoe,
  },
];

const HomePage = () => {
  const [quantities, setQuantities] = useState({});
  const [errors, setErrors] = useState({});
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleQuantityChange = (itemName, value) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: value,
    }));
    // Clear error when user starts typing
    if (errors[itemName]) {
      setErrors((prev) => ({
        ...prev,
        [itemName]: null,
      }));
    }
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.name];

    // Validate quantity
    if (!quantity || quantity <= 0) {
      setErrors((prev) => ({
        ...prev,
        [item.name]: "Please enter a valid quantity",
      }));
      return;
    }

    // Add to cart
    const cartItem = {
      ...item,
      quantity: parseInt(quantity),
    };

    setCart((prev) => [...prev, cartItem]);

    // Clear quantity after adding to cart
    setQuantities((prev) => ({
      ...prev,
      [item.name]: "",
    }));
  };

  return (
    <div>
      <NavBar />

      {/* Cart Summary */}
      <div className="cart-summary">
        <Link to="cart">
          <button
            className="cart-toggle"
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
            🛒 Cart ({cart.length} items)
          </button>
        </Link>
      </div>

      {/* Items Grid */}
      <div className="items">
        {items.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.image} alt={`${item.name} Image`} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <input
              type="number"
              min="1"
              value={quantities[item.name] || ""}
              onChange={(e) => handleQuantityChange(item.name, e.target.value)}
              className={errors[item.name] ? "error" : ""}
              placeholder="Enter Quantity"
            />
            {errors[item.name] && (
              <p className="error-message">{errors[item.name]}</p>
            )}
            <button onClick={() => handleAddToCart(item)}>Add to Cart +</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export { HomePage };
