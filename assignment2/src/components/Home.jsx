// import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";
import g_translate from "../assets/g_translate.png";

const Home = () => {
  return (
    <div className="about-container">
      {/* Fruit.Ai logo */}
      <div className="fruit">Fruit.Ai</div>

      {/* "Be Healthy!" text */}
      <div className="be-healthy">Be Healthy!</div>

      {/* Chat icon */}
      <Link to="/Chatbot">
        <div className="chat">Chat</div>
      </Link>

      {/* Rectangle behind the bottom buttons */}
      <div className="rectangle-2198"></div>

      {/* Group of circles below the rectangle */}
      <div className="rectangle1"></div>
      <div className="rectangle2"></div>
      <div className="rectangle3"></div>
      <div className="rectangle4"></div>
      {/* <div className="rectangle5"></div> */}

      {/* Translate icon */}
      <Link to="/Translator">
        <div className="g_translate">
          <img src={g_translate} alt="image" />
        </div>
      </Link>

      {/* FAQs text */}
      <Link to="/Faq">
        <div className="faqs">FAQs</div>
      </Link>

      <Link to="/About">
        <div className="about">About</div>
      </Link>

      <div className="dots"></div>
    </div>
  );
};

export default Home;