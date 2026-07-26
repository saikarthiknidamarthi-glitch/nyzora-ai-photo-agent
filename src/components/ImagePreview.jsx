export default function ImagePreview({ files, removeImage }) {
  if (files.length === 0) return null;

  return (
    <div className="mt-6 rounded-xl bg-zinc-800 p-5">

      <h3 className="mb-4 text-lg font-semibold">
        Selected Images
      </h3>

      <div className="space-y-4">

        {files.map((file, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-zinc-700 bg-zinc-900 p-3"
          >

            <div className="flex items-center gap-3">

              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-16 w-16 rounded-lg object-cover"
              />

              <div>

                <p className="font-medium">
                  {file.name}
                </p>

                <p className="text-sm text-zinc-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>

              </div>

            </div>

            <button
              onClick={() => removeImage(index)}
              className="rounded-lg bg-red-600 px-3 py-2 text-sm hover:bg-red-500"
            >
              ✕
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}