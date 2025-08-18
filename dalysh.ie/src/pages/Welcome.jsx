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
            "This site is actively being updated and worked on!"
            
          ]}
          speed={70}
          className="text-white-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
            />
          </div>
        </div>

       <div className="welcome-content grid grid-rows-[auto,1fr,auto] h-[600px] place-items-center text-center px-6 pt-8 pb-8">
  {/* top */}
  <h2 className="text-lg font-semibold">A little bit about me...</h2>

  {/* middle */}
  <div className="row-start-2 flex items-center justify-center">
    <LayoutGroup>
      <motion.p className="flex whitespace-pre text-4xl font-bold" layout>
        <motion.span layout>I'm a </motion.span>
        <WordListSwap
          texts={["Software Engineer","VR Enthusiast","AI Follower","Full Stack Developer","Computer Science Student"]}
          className="text-white px-3 bg-[#6259ff] overflow-hidden py-1 rounded-lg"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </motion.p>
    </LayoutGroup>
  </div>

  {/* bottom */}
  <p className="row-start-3 max-w-xl mt-2">
    I'm currently in my third year of Computer Science and Software Engineering at
    Maynooth University. I'm very passionate about VR, AI and Software Engineering
    in general. In my spare time I like to go to the gym, build computers and play
    video games.
  </p>
</div>

      </section>
    </>
  );
}
