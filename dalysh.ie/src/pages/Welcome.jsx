import React from "react";
import Navbar from "../components/Navbar.jsx";
import Typewriter from "../components/Typewriter.jsx";
import "../App.css";
import "../globals.css";

export default function Welcome() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="landing">
          <div className="hello">
             <Typewriter
              words={["HELLO", "I'm Shane.", ":)"]}
              typingSpeed={200}
              deleteSpeed={100}
              holdTime={100}
              loop={true}
            />
          </div>
        </div>

        <div className="welcome-content">
          <h1>
            I am{" "}
           
          </h1>
        </div>
      </section>
    </>
  );
}
