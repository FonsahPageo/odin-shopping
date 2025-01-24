// import { Link } from "react-router-dom";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="items">
        <div className="box">Item 1</div>
        <div className="box">Item 2</div>
        <div className="box">Item 3</div>
        <div className="box">Item 4</div>
        <div className="box">Item 5</div>
        <div className="box">Item 6</div>
        <div className="box">Item 7</div>
        <div className="box">Item 8</div>
        <div className="box">Item 9</div>
      </div>
      <Footer />
    </div>
  );
};

export { HomePage };
