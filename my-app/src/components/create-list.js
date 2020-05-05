import React from "react";
import logo from "../icons/hammer.svg";
import Accordion from "../functionality/accordion";
import { NavLink } from "react-router-dom";
import "../App.css";

function Create() {
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
            <h1>Create a Top 5</h1>
            <br />{" "}
            <h3>
              Unfortunately, Creating a List Isn't Available Yet, But Check Back
              Soon!
              <br /> Thank You for Your Interest!
            </h3>
          </div>
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
        <h1>Back To The Home Page?</h1>
        <NavLink to="/home">
          <button className="home">Let's Go!</button>
        </NavLink>
      </div>
      <footer class="footer pt-80 pt-xs-60">
        <div class="container">
          <h1>Total Top 5's</h1>

          <h4 class="mb-30">Contact / Links</h4>
          <li>
            {" "}
            <a href="mailto:forrestdarabian@gmail.com">
              <i class="ion-ios-email fa-icons"></i>
              forrestdarabian@gmail.com
            </a>{" "}
          </li>
          <li>
            <a href="forrestdarabian.com">
              <i class="fa fa-angle-double-right"></i>Developers Site
            </a>
          </li>
        </div>{" "}
        <div class="copyright">
          <div class="container">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
        </div>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/smalllikeart"
            title="smalllikeart"
          >
            smalllikeart
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Create;
