import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Positive", value: 56 },
  { name: "Neutral", value: 27 },
  { name: "Negative", value: 17 },
];

export default function SentimentSplitGraph({ theme }) {
  const COLORS = [
    "#22c55e", // green
    "#9ca3af", // gray
    "#ef4444", // red
  ];

  return (
    <div
      className="w-[360px] rounded-2xl border shadow-xl p-4 flex flex-col items-center"
      style={{ borderColor: theme?.tertiary_color }}
    >
      <h1 className="text-xl mb-2 font-[Montserrat]">
        SENTIMENT SPLIT
      </h1>

      <PieChart width={220} height={220}>
        <Pie
          data={data}
          innerRadius={60}   // 👈 makes it a donut
          outerRadius={90}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>

      {/* Legend */}
      <div className="flex flex-col gap-2 mt-2 w-full">
        {data.map((item, i) => (
          <div key={item.name} className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i] }}
              />
              {item.name}
            </div>
            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}