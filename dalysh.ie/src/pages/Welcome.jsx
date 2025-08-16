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
            {/* <span>{"We're born 🌞 to "}</span> */}
        <Typewriter
          text={[
            "H e l l o !",
            "I'm Shane.",
            ":)",
            
          ]}
          speed={70}
          className="text-yellow-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
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
