import React, { useState } from "react";
import ColorBlock from "./components/ColorBlock";
import GradientControls from "./components/GradientControls";
import GradientPreview from "./components/GradientPreview";

export default function App() {
  const [colors, setColors] = useState([]);
  const [selectColors, setSelectColors] = useState([]);
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(90);
  

  const generateColors = () => {
    const newColors = Array.from({ length: 60 }, () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    return randomColor;
    });
    setColors(newColors);
  };

  const handleSelectColor = (color) => {
    setSelectColors((prevColor) => [...prevColor, color]);
  };

  const handleUpdateColor = (index, newColor) => {
    const updated = [...selectColors];
    updated[index] = newColor;
    setSelectColors(updated);
  };

  const gradient = () => {
    if (selectColors.length === 0) return "";
    if (type === "linear") {
      return `linear-gradient(${angle}deg, ${selectColors.join(", ")})`;
    } else if (type === "radial") {
      return `radial-gradient(circle, ${selectColors.join(", ")})`;
    } else if (type === "conic") {
      return `conic-gradient(from ${angle}deg, ${selectColors.join(", ")})`;
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          🎨 Color Palette Generator
        </h1>

        <button onClick={generateColors} className="px-8 py-3 mb-8 shadow font-semibold rounded-full bg-amber-200 text-gray-800  hover:bg-gray-100 transition"        >
          Generate Colors
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-4">
          {colors.map((color, index) => (
            <ColorBlock key={index} color={color} onSelect={handleSelectColor} />
          ))}
        </div>
      </div>

      <div className="px-20 py-6 flex flex-col w-full">
        <h1 className="text-xl font-extrabold text-gray-800 mb-6 text-left">
          🎨 Generate Gradient
        </h1>

        <GradientControls type={type} setType={setType} angle={angle} setAngle={setAngle} gradient={gradient()}  />
        <GradientPreview gradient={gradient()} />

        <div className="flex gap-3 mt-6 flex-wrap">
          {selectColors.map((c, i) => (
            <div key={i} className="flex flex-col items-center">
              <input type="color" value={c} onChange={(e) => handleUpdateColor(i, e.target.value)} className="w-10 h-10 cursor-pointer rounded-full border shadow"/>
              <span className="text-xs text-gray-600">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
