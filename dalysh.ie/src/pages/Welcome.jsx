import React from "react";
import Navbar from "../components/Navbar.jsx";
import Typewriter from "../components/Typewriter.jsx";
import { motion, LayoutGroup } from "framer-motion";
import WordListSwap from "../components/word-list-swap.tsx"; 

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
             <LayoutGroup>
      <motion.p className="flex whitespace-pre text-4xl" layout={true}>
        <motion.span
          className="pt-0.5 sm:pt-1 md:pt-2"
          layout={true}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          Cuicui is{" "}
        </motion.span>
        <WordListSwap
          texts={[
            "Amazing!",
            "fancy ✽",
            "optimized",
            "fast",
            "fun",
            "creative",
            "🕶️🕶️🕶️",
          ]}
          mainClassName="text-white px-2 sm:px-2 md:px-3 bg-violet-600 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </motion.p>
    </LayoutGroup>
          </h1>


          <div className="p-6 bg-violet-600 text-white rounded-lg">
  If this is purple with white text, Tailwind is working.
</div>

        </div>
      </section>
    </>
  );
}
