import React from 'react';


const mockTrendingComments = [
  {
    id: 1,
    text: "The quality of Aritzia sweaters has gone downhill recently tbh",
    sentiment: -0.42,
    upvotes: 128,
    category: "Sweaters",
  },
  {
    id: 2,
    text: "Obsessed with their new summer dresses 😍 worth every dollar",
    sentiment: 0.76,
    upvotes: 203,
    category: "Dresses",
  },
  {
    id: 3,
    text: "Sizing is so inconsistent... had to return twice",
    sentiment: -0.55,
    upvotes: 97,
    category: "Sizing",
  },
  {
    id: 4,
    text: "Their jackets are actually amazing for Vancouver weather",
    sentiment: 0.61,
    upvotes: 156,
    category: "Jackets",
  },
  {
    id: 5,
    text: "Prices are getting kinda crazy now not gonna lie",
    sentiment: -0.33,
    upvotes: 184,
    category: "Pricing",
  },
];

export default function TrendingCommentsCard({ theme }) {
  return (
    <>
    <div  className="group relative text-start w-90 backdrop-blur-lg border shadow-xl flex flex-col hover:scale-105 rounded-2xl p-4 transition-transform duration-300 overflow-hidden"
     style={{
        backgroundColor: theme?.secondary_color,
        borderColor: theme?.tertiary_color,
      }}>
       <h1 className="text-xl mb-4 font-[Montserrat] text-gray-800">TRENDING COMMENTS</h1>
       <div className="flex flex-col gap-1">
        {mockTrendingComments.map((comment) => (
          <div key={comment.id} className="flex  items-top rounded-lg transition">
            {/* Comment text */}
            <div className="w-4/5 text-sm text-gray-600">
              "{comment.text}"
            </div>

            {/* Upvotes */}
            <div className="w-1/5 text-right text-sm">
              +{comment.upvotes}
            </div>

            {/* Sentiment */}
            <div className="w-1/5 text-right text-sm text-green-600">
              {comment.sentiment > 0 ? '+' : ''}{(comment.sentiment * 100).toFixed(0)}%
            </div>
          </div>
        ))}
      </div>
       
    </div>
    </>
  );
}