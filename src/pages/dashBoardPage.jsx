import KPICard from "../components/KPICard"
import SentimentAnalysisGraph from "../components/SentimentAnalysisGraph"
import { brandThemes } from "../utils/Styles";
import TrendingCommentsCard from "../components/TrendingCommentsCard";
import SentimentSplitGraph from "../components/SentimentSplitGraph";

const selectedCompany = "Aritzia";
const theme = brandThemes.companies[selectedCompany];



export default function dashBoardPage() {
  return (
    <>
    <div className="mx-10 mt-5 flex flex-col items-center justify-center">
      <div className="py-2 w-full">
        <div className="flex flex-col">
          <h1 className="text-5xl text-left font-[Noto_Serif] align-middle px-4 items-center text-gray-900">
            ARITZIA
          </h1>
          <div className="flex justify-between items-center gap-3">
            <h1 className=" text-2xl text-left w-full justify-items space-between font-[Noto_Serif] align-middle px-4 items-center text-gray-900"
            style={{
            color: theme?.tertiary_color,
          }}>
              BRAND PULSE
            </h1>
          </div>
          <div className="h-[2px] rounded-full mx-4 "  style={{
            backgroundColor: theme?.tertiary_color,
          }}>
          </div>
        </div>
      </div>

      <div className="flex w-full h-[600px] gap-5 p-4 items-start">
        <div className="flex flex-col gap-5 w-350">
          <div className="w-full gap-5 flex "> 
            <KPICard metric="POSTS ANALYZED" value="1,287" change="^ 14% from last week"  theme={theme}/>
             <KPICard metric="AVG SENTIMENT" value="+0.34" change="^ Improving" theme={theme}/>
              <KPICard metric="MOST DISCUSSED CATEGORY" value="Dresses" change="1288 posts mentions" theme={theme}/>
          </div>
          <div className="w-full gap-2 flex items-center justify-center">
            <SentimentAnalysisGraph/>
            <SentimentSplitGraph theme={theme} />
          </div>
          <div className="w-full bg-green-200 flex items-center justify-center">
            For keyword blob
          </div>
          </div>
          <TrendingCommentsCard theme={theme}/>
      </div>

    </div>
     
    </>
  )
}