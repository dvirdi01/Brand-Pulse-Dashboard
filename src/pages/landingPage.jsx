import Button from "../components/button"
import MacWindow from "../components/MacWindow"
import { Fade } from "react-awesome-reveal";

export default function LandingPage() {
  return (
    <>
    <Fade cascade duration={1000} triggerOnce fraction={0.5}>
    <div className="m-30 flex flex-col items-center justify-center">
      
      <div className="max-w-2xl px-6 text-center">
        <Fade direction="down" delay={300} triggerOnce duration={2000}>

        <h1 className="text-4xl font-bold leading-tight font-[Noto_Serif]">
          What do customers really think about Aritzia?
        </h1>
         </Fade>

    <Fade direction="down" delay={300} triggerOnce duration={2000}>
        <p className="text-md mt-4 text-gray-700 font-[Montserrat] mb-2">
          Real-time sentiment, trends, and product insights from online conversations
        </p>
    </Fade>
      </div>
      <Button/>
    <MacWindow/>

    </div>
    </Fade>
     <div className="pointer-events-none fixed bottom-0 left-0 w-full h-50 bg-gradient-to-t from-gray-200 to-transparent" />
     </>
  )
}