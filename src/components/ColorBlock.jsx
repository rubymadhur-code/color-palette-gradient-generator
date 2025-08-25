import React, { useState } from "react";
import { Copy } from "lucide-react";

export default function ColorBlock({ color, onSelect }) {
  const [copied, setCopied] = useState(false);

  const handleCopyColor = (e) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      className="relative w-16 h-16 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105" style={{ backgroundColor: color }} onClick={() => onSelect(color)}>
      {/* Copy button for copy colors to clipboard */}
      <button
        className="absolute bg-white/80 p-1 top-1 right-1 shadow rounded-full hover:bg-white" onClick={handleCopyColor}>
        <Copy size={12} className="text-gray-700" />
      </button>

      {/* Show hex color on color div in center */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-white font-semibold text-sm drop-shadow-lg">{color}</p>
      </div>

      {copied && (
        <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded shadow">
          Copied!
        </span>
      )}
    </div>
  );
}
