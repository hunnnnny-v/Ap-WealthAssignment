// import React from 'react';
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="vector"></div>
      <div className="vector2"></div>
      <div className="vector3"></div>
      <div className="card">
        <h2 className="fruit-ai">Fruit.Ai</h2>
        <p className="description">
          Whether you re looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <button className="about-btn">ABOUT</button>
      </div>
    </div>
  );
};

export default About;
