import { Copy } from "lucide-react";
import { useState } from "react";

function GradientControls({ type, setType, angle, setAngle, gradient }) {
  const [copied, setCopied] = useState(false);

  const handleCopyGradient = () => {
    navigator.clipboard.writeText(gradient);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-4 rounded-2xl shadow-lg bg-white border border-gray-200 flex items-center gap-4 flex-wrap w-full">
      <select className="p-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="linear">Linear</option>
        <option value="radial">Radial</option>
        <option value="conic">Conic</option>
      </select>
      {(type === "linear" || type === "conic") && (
        <input type="number" className="p-2 w-28 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Angle (deg)" value={angle} onChange={(e) => setAngle(e.target.value)} />
      )}
      <div className="flex-1"></div>
      {gradient && (
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 max-w-lg overflow-x-auto">
          <span className="text-sm text-gray-700 whitespace-nowrap">{gradient}</span>
          <button onClick={handleCopyGradient} className="p-1 rounded hover:bg-gray-200 transition flex-shrink-0"  title="Copy to clipboard" >
            <Copy size={16} className="text-gray-700" />
          </button>
          {copied && <span className="text-xs text-green-600 ml-1">Copied!</span>}
        </div>
      )}
    </div>
  );
}

export default GradientControls;
