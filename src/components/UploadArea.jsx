export default function UploadArea({ onFileSelect }) {
  return (
    <>
      <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-700 transition hover:border-indigo-500 hover:bg-zinc-800/40">

        <input
          type="file"
          multiple
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
          onChange={onFileSelect}
        />

        <div className="mb-3 text-5xl">
          📸
        </div>

        <h3 className="text-lg font-semibold">
          Drag & Drop Images
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Click to browse your computer
        </p>

      </label>

      <p className="mt-3 text-center text-sm text-zinc-500">
        Maximum 3 photos per analysis
      </p>
    </>
  );
}