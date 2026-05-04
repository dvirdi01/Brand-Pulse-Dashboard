import React from 'react';

export default function KPICard({metric, value, change}) {
  return (
    <>
    <div className="group relative text-start bg-white/20  backdrop-blur-lg border border-white/30 shadow-xl h-40 w-60 max-w-lg flex flex-col justify-between hover:scale-105 rounded-2xl p-4 transition-transform duration-300 overflow-hidden">
        <div className="flex text-md w-20 font-[Montserrat] text-gray-500">
            {metric}
        </div>
        <div className='text-3xl text-gray-800 font-semibold'>
            {value}
        </div>
        <div className="text-gray-800">
            {change}
        </div>
    </div>
    </>
  );
}