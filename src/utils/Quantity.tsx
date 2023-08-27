"use client";

import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="flex items-center gap-x-2">
      {/* Minus */}
      <button
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
        className=" flex justify-center w-8 h-8 border rounded-full center bg-gray-600 text-3xl text-gray-50"
      >
        -
      </button>
      {/* Number */}
      <span className="text-lg font-semibold">{num}</span>
      {/* Plus */}
      <button
        className="flex justify-center w-8 h-8 border rounded-full center bg-gray-600 text-3xl text-gray-50"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
