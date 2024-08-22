import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-item">
          <h3>Background</h3>
          <p>Information about your background...</p>
        </div>
        <div className="about-item">
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="about-item">
          <h3>Experience</h3>
          <p>Details about your work experience...</p>
        </div>
        <div className="about-item">
          <h3>Education</h3>
          <p>Information about your educational background...</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;