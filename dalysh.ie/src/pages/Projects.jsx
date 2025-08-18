import Typewriter from "../components/Typewriter.jsx";

export default function Projects(){
    return(
        <>
      
      <section className="hero">
        <div className="landing">
          <div className="hello">
            {/* <span>{"text before typewriter "}</span> */}
        <Typewriter
          text={[
            "M Y   P R O J E C T S",
            ":)"
            
          ]}
          speed={70}
          className="text-white-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
            />
          </div>
        </div>

        </section>
        </>
    )
}