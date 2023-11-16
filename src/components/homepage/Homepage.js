import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    
    <div class="container-fluid bg-image1">
      <section class="container-fluid d-flex flex-wrap flex-row justify-content-around align-items-center">
        <div>
          <h1 class="display-2 title">CRM<i>360</i></h1>
          <h2 class="subtitle">Your Partner in Customer Success</h2>
        </div>
        <div class="home">
        <div class="bubble-animation">
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        <div className="bubble-animation-item"></div>
        </div>
        <div className="form d-flex flex-wrap flex-row justify-content-around align-items-center">
          <div>
          <button className="client-button">
            <Link to={"/client-login/"} className="link text-light">
              <img
                src=""
                alt="Client"
                width="190px"
                height="200px"
              />
              <br></br> Client Login
            </Link>
          </button>
          </div>
          <div>
          <button className="manager-button">
            <Link to={"/agent-login/"} className="link text-light">
              <img
                src="https://o.remove.bg/downloads/c93901f4-5f56-4ab9-a205-83c389ddac08/images-removebg-preview.png"
                alt="Agent"
                width="190px"
                height="200px"
              />
              <br></br> Agent Login
            </Link>
          </button>
          </div>
          <div>
          <button className="admin-button">
            <Link to={"/admin-login/"} className="link text-light">
              <img
                src="https://o.remove.bg/downloads/8cdeda1a-d336-45fb-99d2-a6b47f78cb48/61f75ea9a680def2ed1c6929fe75aeee-removebg-preview.png"
                alt="Admin"
                width="190px"
                height="200px"
              />
              <br></br>Admin Login
            </Link>
          </button>
          </div>
          </div>
        </div>
      </section>
      <section>

      </section>
      <div class="footer-bottom">
            <div class="container">
                <p class="m-0 text-center">&copy; 2023 <i>CRM360</i>. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  );
};

export default Homepage;
