import React from "react";
import logo from "../icons/alien.svg";
import Accordion from "../functionality/accordion";
import { NavLink } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="nav-container">
        <NavLink to="/movies">
          <button className="movies">Movies</button>
        </NavLink>
        <NavLink to="/music">
          <button className="music">Music</button>
        </NavLink>
        <NavLink to="/tv">
          <button className="tv">T.V. Shows</button>
        </NavLink>
        <NavLink to="/games">
          <button className="games">Video Games</button>
        </NavLink>
      </div>

      <br />

      <div className="second-nav-container">
        <NavLink to="/home">
          <button className="home">Home</button>
        </NavLink>
      </div>

      <div className="Home">
        <header className="Home-header">
          <div>
            <br />
            <h1>Welcome to the Home Page!</h1>
            <br /> <h3>Click a Category Above or Scroll Down for More Info!</h3>
          </div>
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <br />
          <h1>So What's This App All About?</h1>
          <br />
          <h3>
            Have You Ever Wondered What The Best Movies, Artists, Games, or T.V.
            Shows Were? <br /> Well You've Come to the Right Place!
          </h3>
          <Accordion
            title="Meet The Creator"
            content="
          <h3>Forrest Darabian</h3>
          <p>Is a Full-Stack Web Developer from Thousand Oaks, California. He enjoys Music, Art, and Coding awesome sites like this!</p>
    "
          />
        </header>
      </div>
    </div>
  );
}

export default Home;
