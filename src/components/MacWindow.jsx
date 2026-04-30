import React from 'react';

export default function MacWindow() {
  return (
    <div className="bg-white flex flex-col rounded-xl shadow-2xl border border-gray-200 h-150 w-full max-w-4xl mt-10 overflow-hidden transform -translate-y-2">
        <div className="bg-white flex gap-2 items-center p-3 border-b border-gray-200">
            <div className="bg-red-400 h-3 w-3 rounded-full"></div>
            <div className="bg-yellow-400 h-3 w-3 rounded-full"></div>
            <div className="bg-green-400 h-3 w-3 rounded-full"></div>
        </div>

        <div className="bg-green-100 h-full p-2 relative overflow-hidden">
            Pictures will come here
        </div>
    </div>
  );
}