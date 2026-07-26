export default function ResultDashboard({
  analysis,
  score,
  edited,
  photo_ratings = [],
}) {
  const bestScore =
    photo_ratings.length > 0
      ? Math.max(...photo_ratings.map((p) => p.score))
      : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          📷 AI Photography Review
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            ⭐ Overall Rating
          </h2>

          <div className="text-5xl font-bold text-green-400">
            {score}/10
          </div>

          <p className="mt-2 text-zinc-400">
            Edited : {edited ? "Yes" : "No"}
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            🏆 Photo Ratings
          </h2>

          {photo_ratings.length === 0 ? (
            <p className="text-red-400">
              No ratings received.
            </p>
          ) : (
            photo_ratings.map((photo, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-zinc-800 rounded-xl p-4 mb-3"
              >
                <span>{photo.image}</span>

                <span className="font-bold text-green-400">
                  {photo.score}/10{" "}
                  {photo.score === bestScore && "⭐ Best"}
                </span>
              </div>
            ))
          )}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        </div>

      </div>
    </div>
  );
}