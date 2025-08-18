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

       {/* parent centers the card */}
<section className="flex justify-center px-4">
  <div className="welcome-content
    grid grid-rows-[auto,1fr,auto]
    w-full max-w-[720px]     /* scales down, never wider than 720px */
    min-h-[420px] sm:min-h-[520px]  /* grows a bit on larger screens */
    bg-gray-200 rounded-2xl
    pt-8 pb-10 px-6 sm:px-8
  ">
    {/* top */}
    <h2 className="text-center text-base sm:text-lg font-semibold">
      A little bit about me...
    </h2>

    {/* middle */}
    <div className="row-start-2 flex items-center justify-center">
      <LayoutGroup>
        <motion.p
          className="text-2xl sm:text-4xl font-bold leading-tight text-center"
          layout
        >
          I'm a{" "}
          <WordListSwap
            texts={[
              "Software Engineer",
              "VR Enthusiast",
              "AI Follower",
              "Full Stack Developer",
              "Computer Science Student",
            ]}
            className="inline-flex items-center
                       max-w-full
                       text-white px-3 sm:px-4 py-1 sm:py-1.5
                       bg-[#6259ff] rounded-lg
                       overflow-hidden align-middle"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>

    {/* bottom */}
    <p className="row-start-3 max-w-prose mx-auto text-center mt-3 sm:mt-4">
      I'm currently in my third year of Computer Science and Software Engineering at
      Maynooth University. I'm very passionate about VR, AI and Software Engineering
      in general. In my spare time I like to go to the gym, build computers and play
      video games.
    </p>
  </div>
</section>


      </section>
    </>
  );
}
