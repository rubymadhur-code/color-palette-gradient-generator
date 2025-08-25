function GradientPreview({ gradient }) {
  return (
    <div className="w-full h-40 flex items-center justify-center text-white font-bold shadow-lg rounded-xl mt-4" style={{ background: gradient || "white" }} >
      {gradient ? "Preview" : "Pick colors to see gradient"}
    </div>
  );
}
export default GradientPreview;
