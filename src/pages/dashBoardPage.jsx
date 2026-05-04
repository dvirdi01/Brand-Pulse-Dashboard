import KPICard from "../components/KPICard"
import SentimentAnalysisGraph from "../components/SentimentAnalysisGraph"

export default function dashBoardPage() {
  return (
    <>
    <div className="mx-10 mt-5 flex flex-col items-center justify-center">
      <div className="py-2 w-full">
        <div className="flex flex-col">
          <h1 className="text-5xl text-left font-[Noto_Serif] align-middle px-4 items-center">
            ARITZIA
          </h1>
          <div className="flex justify-between items-center gap-3">
            <h1 className=" text-2xl text-left w-full justify-items space-between font-[Noto_Serif] align-middle px-4 items-center">
              BRAND PULSE
            </h1>
          </div>
          <div className="h-[2px] rounded-full bg-gray-800 mx-4 "></div>
        </div>
      </div>

      <div className="bg-blue-200 flex w-full h-[600px] gap-5 p-4">
        <div className="bg-red-200 flex flex-col gap-5 w-350">
          <div className="w-full bg-purple-200 gap-5 flex "> 
            <KPICard metric="POSTS ANALYZED" value="1,287" change="^ 14% from last week"/>
             <KPICard metric="AVG SENTIMENT" value="+0.34" change="^ Improving"/>
              <KPICard metric="MOST DISCUSSED CATEGORY" value="Dresses" change="1288 posts mentions"/>
          </div>
          <div className="w-full bg-yellow-300 gap-5 flex items-center justify-center">
            <SentimentAnalysisGraph/>
            <KPICard/>
          </div>
          <div className="w-full bg-green-200 flex items-center justify-center">
            For keyword blob
          </div>
          </div>
          <div className="bg-gray-200 w-100">
          For Trending comments section
          </div>
      </div>

    </div>
     
    </>
  )
}