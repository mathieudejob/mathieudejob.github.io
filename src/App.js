// React
import React, { useEffect } from "react";
// Styles
import "./assets/styles/App.css";
import "./assets/styles/App-min-490px.css";
import "./assets/styles/App-min-1024px.css";
import "./assets/styles/App-min-1280px.css";
import "./assets/styles/App-min-1536px.css";

function App() {
  useEffect(() => {
    const skillsTitle = document.querySelector(".skills h2");
    const skillsLi = document.querySelectorAll(".skills ul li");
    const contactTitle = document.querySelector(".contactsContainer h2");
    const aproposTitle = document.querySelector(".apropos h2");
    const tel = document.querySelector(".contactsContainer div:nth-child(2)");
    const mail = document.querySelector(".contactsContainer div:last-child");
    const aproposLi = document.querySelectorAll(".apropos ul li");

    const timer = setTimeout(() => {
      // Titles
      skillsTitle.style.transform = "translateY(0px)";
      skillsTitle.style.transition = "transform 400ms ease-in";
      contactTitle.style.transform = "translateY(0px)";
      contactTitle.style.transition = "transform 400ms ease-in";
      aproposTitle.style.transform = "translateY(0px)";
      aproposTitle.style.transition = "transform 400ms ease-in";

      // Contacts contents
      tel.style.transform = "translateX(0px)";
      tel.style.transition = "transform 200ms ease-in 1s";
      mail.style.transform = "translateX(0px)";
      mail.style.transition = "transform 200ms ease-in 1s";
    }, 1000);

    const timer2 = setTimeout(() => {
      // Skills contents
      skillsLi.forEach((element, i) => {
        setTimeout(() => {
          element.style.transform = "translateX(0px)";
          element.style.transition = "transform 700ms ease-in";
        }, i * 100);
      });

      // A propos contents
      aproposLi.forEach((element, i) => {
        setTimeout(() => {
          element.style.transform = "translateX(0px)";
          element.style.transition = "transform 700ms ease-in";
        }, i * 100);
      });
    }, 2500);

    // Clear all timeout
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* HTML page contents */}
      <div className="container">
        {/* Main title */}
        <div className="titleContainer">
          <h1>
            besoin d'un
            <br />
            <span>site web?</span>
          </h1>
        </div>

        {/* Website 3D model */}

        {/* Compétences */}
        <div className="skills">
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>REACT</li>
            <li>Tailwind CSS</li>
            <li>CMS (Wordpress / Webflow)</li>
          </ul>
          <h2>Compétences</h2>
        </div>

        {/* Contacts */}
        <div className="contactsContainer">
          <div className="contactsTitle">
            <h2>contacts</h2>
          </div>
          <div className="contactsBox">
            <h3>mail</h3>
            <p>dejob.mathieu@gmail.com</p>
          </div>
          <div className="contactsBox">
            <h3>tel</h3>
            <p>+336 31 66 30 86</p>
          </div>
        </div>

        {/* A propos */}
        <div className="apropos">
          <ul>
            <li>Mathieu - 29 ans 🙋‍♂️</li>
            <li>Développeur web frontend 💻</li>
            <li>Auto-entrepreneur 🏠👨‍💻</li>
            <li>Depuis juillet 2021 🗓️</li>
          </ul>
          <h2>A propos</h2>
        </div>
      </div>
    </>
  );
}

export default App;
