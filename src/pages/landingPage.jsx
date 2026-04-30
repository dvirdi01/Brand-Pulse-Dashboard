import Button from "../components/button"
import MacWindow from "../components/MacWindow"

export default function LandingPage() {
  return (
    <div className="m-30 flex flex-col items-center justify-center">
      
      <div className="max-w-2xl px-6 text-center">
        
        <h1 className="text-4xl font-bold leading-tight font-[Noto_Serif]">
          What do customers really think about Aritzia?
        </h1>

        <p className="text-md mt-4 text-gray-700 font-[Montserrat] mb-2">
          Real-time sentiment, trends, and product insights from online conversations
        </p>

      </div>
      <Button/>
      <MacWindow/>

    </div>
  )
}