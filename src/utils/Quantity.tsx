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
        className="w-6 h-6 border rounded-full flex items-center justify-between"
      >
        -
      </button>
      {/* Number */}
      <span className="text-sm font-semibold">{num}</span>
      {/* Plus */}
      <button
        className="w-6 h-6 border rounded-full center"
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
