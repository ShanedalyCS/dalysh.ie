import React from "react";
import { useEffect, useState } from "react";

export default function Typewriter({
  words = ["a developer.", "a problem solver.", "a builder."],
  typingSpeed = 80,     // ms per character when typing
  deleteSpeed = 45,     // ms per character when deleting
  holdTime = 1200,      // pause after a word is complete
  loop = true,
}) {
  const [i, setI] = useState(0);         // which word
  const [txt, setTxt] = useState("");    // visible substring
  const [del, setDel] = useState(false); // deleting?

  useEffect(() => {
    const full = words[i];
    const doneTyping = txt === full;
    const doneDeleting = txt === "";

    const nextDelay = del
      ? deleteSpeed
      : typingSpeed;

    const t = setTimeout(() => {
      if (!del) {
        // typing forward
        setTxt(full.slice(0, txt.length + 1));
        if (doneTyping) {
          setDel(true);
          // pause on full word
          clearTimeout(t);
          setTimeout(() => setDel(true), holdTime);
        }
      } else {
        // deleting
        setTxt(full.slice(0, txt.length - 1));
        if (doneDeleting) {
          setDel(false);
          setI((i + 1) % words.length);
          if (!loop && i === words.length - 1) {
            // stop on last word if not looping
            setTxt(words[i]);
            setDel(false);
          }
        }
      }
    }, doneTyping && !del ? holdTime : nextDelay);

    return () => clearTimeout(t);
  }, [txt, del, i, words, typingSpeed, deleteSpeed, holdTime, loop]);

  return <span className="typewriter">{txt}</span>;
}
