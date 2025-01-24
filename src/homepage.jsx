// import { Link } from "react-router-dom";
import { NavBar } from "./navbar";
import { Footer } from "./footer";
import './styles.css';
import bag from './images/bag.jpg';
import cake from './images/cake.jpg';
import car from './images/car.jpg';
import dog from './images/dog.jpg';
import headphones from './images/headphones.jpg';
import house from './images/house.jpg';
import juice from './images/juice.jpg';
import laptop from './images/laptop.jpg';
import shoe from './images/shoe.jpg';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="items">
        <div className="box">
            <img src={bag} alt="Bag Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={cake} alt="Cake Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={car} alt="Car Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={dog} alt="Dog Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={headphones} alt="Headphones Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={house} alt="House Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={juice} alt="Juice Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={laptop} alt="Laptop Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
        <div className="box">
            <img src={shoe} alt="Shoe Image" />
            <input type="number" placeholder="Enter Quantity" />
            <button>Add to Cart +</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { HomePage };
