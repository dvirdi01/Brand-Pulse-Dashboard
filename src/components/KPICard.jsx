import React from 'react';

export default function KPICard() {
  return (
    <>
    <div className="group relative text-start bg-white/20  backdrop-blur-lg border border-white/30 shadow-xl h-40 w-60 max-w-lg flex flex-col justify-between hover:scale-105 rounded-2xl p-6 transition-transform duration-300 overflow-hidden">
  <div className="flex items-center gap-3 mb-4">
    <div
      className="p-3 rounded-full"
    >
    </div>
    <h3 className="text-2xl font-bold text-[#2c2f45] dark:text-white">
     TITLE
    </h3>
  </div>

  <p className="text-md text-gray-700 dark:text-gray-300 mb-2 break-words">
    Hello
  </p>

  {/* Divider */}
  <div className="border-t border-gray-300 " />

  <div className="flex flex-row items-center gap-3 text-lg font-semibold text-[#95389E] dark:text-[#e5e1f0]">
  Start Practicing 
</div>
</div>
    </>
  );
}