// React
import React, { useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
// Styles
import "./assets/styles/App.css";
import "./assets/styles/App-min-490px.css";
import "./assets/styles/App-min-1024px.css";
import "./assets/styles/App-min-1280px.css";
import "./assets/styles/App-min-1536px.css";
// 3D model
import Model from "./assets/components/Website-anim";
import Swal from "sweetalert2";

function App() {
  Swal.fire({
    text: "Ce site regroupe des informations me concernant mais est temporaire.\n Mon portfolio est en cours de construction ! :)",
    width: "50%",
  });

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
        <div className="webgl">
          <Canvas shadows>
            <ambientLight intensity={0.1} />
            <pointLight
              position={[10, 10, 10]}
              intensity={0.2}
              distance={2000}
            />
            <spotLight
              position={[-20, 10, 20]}
              angle={0.2}
              intensity={1}
              distance={100}
              castShadow
            />
            {/* <OrbitControls /> */}
            <Suspense
              fallback={
                <Html center>
                  <Loader />
                </Html>
              }
            >
              <Model />
            </Suspense>
          </Canvas>
        </div>

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
