import React from "react";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Innovator. Builder. Leader.</h1>
        <p>
          Hi! I'm Darsh Gangakhedkar, a motivated and detail-oriented Computer Science major.
          I have experience in software development, project management, and leadership.
        </p>
        <div className="buttons">
          <a href="/contact" className="btn primary">Work With Me</a>
          <a href="/work" className="btn secondary">See My Work</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="profile.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;