import { NavBar } from "./navbar";
import { Footer } from "./footer";
import { Link } from "react-router-dom";
import { useCart } from "./usecart";
import "./styles.css";

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <NavBar />
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Start shopping to add items to your cart!</p>
                    <Link to="/">
                        <button className="continue-shopping">Continue Shopping</button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img 
                                src={item.image} 
                                alt={item.name} 
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button 
                                    onClick={() => removeFromCart(index)}
                                    className="remove-button"
                                >
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <p>Total Items: {cart.length}</p>
                    <p>Total Quantity: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export { Cart };