import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import BannerImage from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Stefan's pizzeria</h1>
        <p>pizza to fit any taste</p>
        <Link to="Menu">
          <button>Order now</button>
        </Link> 
      </div>
    </div>
  );
}

export default Home;
