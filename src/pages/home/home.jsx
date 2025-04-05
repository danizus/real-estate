import React from "react";
import "./home.scss";
import Searchbar from "../../components/searchbar/Searchbar";

export default function Homepage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Your Dream Home – Explore, Discover, and Invest with
            Confidence!
          </h1>
          <p>
            Browse a wide range of premium properties tailored to your
            lifestyle. Whether you're buying, selling, or investing, we make
            real estate simple and seamless. Start your journey today!
          </p>
          <Searchbar/>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
       

      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Hero image" />
      </div>
    </div>
  );
}
