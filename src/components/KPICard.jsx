import React from 'react';

export default function KPICard({metric, value, change, theme}) {
  return (
    <>
    <div  className="group relative text-start backdrop-blur-lg border shadow-xl h-40 w-60 max-w-lg flex flex-col justify-between hover:scale-105 rounded-2xl p-4 transition-transform duration-300 overflow-hidden"
      style={{
        backgroundColor: theme?.secondary_color,
        borderColor: theme?.tertiary_color,
      }}>
        <div className="flex text-md w-20 font-[Montserrat] text-gray-800">
            {metric}
        </div>
        <div className='text-3xl font-semibold' style={{
            color: theme?.tertiary_color,
        }}>
            {value}
        </div>
        <div className="text-gray-600">
            {change}
        </div>
    </div>
    </>
  );
}