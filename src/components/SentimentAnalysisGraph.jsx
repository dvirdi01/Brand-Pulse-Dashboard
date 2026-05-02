import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const mockSentimentData = [
  { day: "Mon", positive: 42, neutral: 35, negative: 23 },
  { day: "Tue", positive: 48, neutral: 30, negative: 22 },
  { day: "Wed", positive: 55, neutral: 28, negative: 17 },
  { day: "Thu", positive: 50, neutral: 32, negative: 18 },
  { day: "Fri", positive: 61, neutral: 24, negative: 15 },
  { day: "Sat", positive: 58, neutral: 27, negative: 15 },
  { day: "Sun", positive: 65, neutral: 22, negative: 13 },
];

function SentimentAnalysisGraph() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-5">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Sentiment Analysis
        </h2>
        <p className="text-sm text-gray-500">
          Weekly sentiment trends from Reddit comments
        </p>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockSentimentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="positive"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="neutral"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="negative"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SentimentAnalysisGraph;