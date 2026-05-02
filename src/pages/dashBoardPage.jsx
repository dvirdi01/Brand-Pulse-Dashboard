export default function dashBoardPage() {
  return (
    <>
    <div className="bg-pink-200 flex flex-col items-center justify-center">
      <div className="bg-green-200 py-2 w-full">
        <div className="flex flex-col">
          <h1 className="text-5xl text-left font-[Noto_Serif] align-middle px-4 items-center">
            ARITZIA
          </h1>
        <div className="flex justify-between items-center gap-3">
          <h1 className=" text-2xl text-left w-full justify-items space-between font-[Noto_Serif] align-middle px-4 items-center">
            BRAND PULSE
          </h1>
        </div>
        </div>
      </div>

      <div className="bg-blue-200 flex w-full h-[600px] p-4">
        <div className="bg-red-200 w-350">
          <div className="w-full bg-purple-200 flex items-center justify-center"> 
            For KPI metrics 
          </div>
          <div className="w-full bg-yellow-300 flex items-center justify-center">
            For sentiment analysis graphs 
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