// Styles
import "./assets/styles/App.css";
import "./assets/styles/App-min-490px.css";
import "./assets/styles/App-min-1024px.css";
import "./assets/styles/App-min-1280px.css";
import "./assets/styles/App-min-1536px.css";

function App() {
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
