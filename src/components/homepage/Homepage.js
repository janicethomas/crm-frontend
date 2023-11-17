import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import logo1 from '../../assets/img/Logo1.png';
import logo from '../../assets/img/Logo.png';

const Homepage = () => {
  return (
    
    <div class="container-fluid bg-image1">
      <section class="container-fluid d-flex flex-wrap flex-row justify-content-around align-items-center">
        <div>
        <img
                src={logo}
                alt="Client"
                width="250px"
                height="250px"
              />
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
                src={logo1}
                alt="Client"
                width="50px"
                height="50px"
              />
              <br></br> Client Login
            </Link>
          </button>
          </div>
          {/* <div>
          <button className="manager-button">
            <Link to={"/agent-login/"} className="link text-light">
              <img
                src={logo1}
                alt="Agent"
                width="50px"
                height="50px"
  /> 
            <br></br> Agent Login
            </Link>
          </button>
          </div> */}
  <div> 
          <button className="admin-button">
            <Link to={"/admin-login/"} className="link text-light">
              <img
                src={logo1}
                alt="Admin"
                width="50px"
                height="50px"
              /> 
              <br></br> Admin Login
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
