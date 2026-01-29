function About() {
  return (
    <section id="about" className="about fade-in">
      <h2>About Me</h2>

      <p className="about-intro">
        I'm a Frontend Developer passionate about building modern, fast and
        accessible web applications. I enjoy turning complex ideas into
        clean, intuitive user experiences.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <span className="about-icon">💡</span>
          <h3>Clean Code</h3>
          <p>
            I write clean, readable and maintainable code that scales well
            over time.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">⚡</span>
          <h3>Performance</h3>
          <p>
            I focus on performance, responsiveness and smooth user interactions.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🎨</span>
          <h3>UI / UX Mindset</h3>
          <p>
            I care about details, usability and building interfaces users enjoy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
