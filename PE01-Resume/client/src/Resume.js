import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Ana Balcazar</h1>
        <p>Seattle, WA, USA| (000) 000-0000 | ana@email.com</p>
      </header>
      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle, WA | May 2023</p>
          <p>GPA: 3.9/4.0</p>
          <h3>Bachelor of Science in Environmental Science</h3>
          <p>Universidad de Ibague, Ibague, Colombia | Jul 2018</p>
          <p>GPA: 3.7/4.0</p>
        </div>
      </section>
    
      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
    <h3>Personal Website</h3>
    <p>
      Built a personal website using React and deployed it on GitHub Pages.
      Source code:{" "}
      <a
        href="https://github.com/studentname/personal-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/studentname/personal-website
      </a>
    </p>
    <h3>Online Bookstore</h3>
    <p>
      Developed a web application for an online bookstore using Spring Boot and MySQL.
      Source code:{" "}
      <a
        href="https://github.com/studentname/online-bookstore"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/studentname/online-bookstore
      </a>
    </p>
  </div>
      </section>
    </div>
);
};

export default Resume;