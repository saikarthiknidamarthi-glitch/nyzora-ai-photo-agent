export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="mb-8 flex gap-4">
      <button
        onClick={() => setMode("quick")}
        className={`flex-1 rounded-xl py-3 font-semibold transition ${
          mode === "quick"
            ? "bg-indigo-600 text-white"
            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        Quick Review
      </button>

      <button
        onClick={() => setMode("creative")}
        className={`flex-1 rounded-xl py-3 font-semibold transition ${
          mode === "creative"
            ? "bg-indigo-600 text-white"
            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
        }`}
      >
        Creative Review
      </button>
    </div>
  );
}