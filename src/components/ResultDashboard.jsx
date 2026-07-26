export default function ResultDashboard({ analysis }) {
  const bestScore = analysis.photo_ratings
    ? Math.max(...analysis.photo_ratings.map((p) => p.score))
    : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          📷 AI Photography Review
        </h1>

        {/* Photo Ratings */}

        {analysis.photo_ratings && (
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 mb-6">

            <h2 className="text-2xl font-semibold mb-5">
              🏆 Photo Ratings
            </h2>

            <div className="space-y-3">

              {analysis.photo_ratings.map((photo, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-zinc-800 rounded-xl px-4 py-3"
                >
                  <span className="font-medium">
                    {photo.image}
                  </span>

                  <span className="text-lg font-bold text-green-400">
                    {photo.score}/10{" "}
                    {photo.score === bestScore && "⭐ Best"}
                  </span>
                </div>
              ))}

            </div>

          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Strengths */}

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

            <h2 className="text-2xl font-semibold mb-4 text-green-400">
              💪 Strengths
            </h2>

            <ul className="space-y-3">

              {analysis.photo_tips.strengths.map((tip, index) => (
                <li key={index}>
                  ✅ {tip}
                </li>
              ))}

            </ul>

          </div>

          {/* Improvements */}

          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              🎯 Improvements
            </h2>

            <ul className="space-y-3">

              {analysis.photo_tips.improvements.map((tip, index) => (
                <li key={index}>
                  • {tip}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Camera Review */}

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 mt-6">

          <h2 className="text-2xl font-semibold mb-5">
            📸 Camera Review
          </h2>

          <div className="space-y-4">

            <div>
              <strong>Composition</strong>
              <p>{analysis.camera_review.composition}</p>
            </div>

            <div>
              <strong>Lighting</strong>
              <p>{analysis.camera_review.lighting}</p>
            </div>

            <div>
              <strong>Framing</strong>
              <p>{analysis.camera_review.framing}</p>
            </div>

            <div>
              <strong>Exposure</strong>
              <p>{analysis.camera_review.exposure}</p>
            </div>

            <div>
              <strong>Focus</strong>
              <p>{analysis.camera_review.focus}</p>
            </div>

          </div>

        </div>

        {/* Social Media */}

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 mt-6">

          <h2 className="text-2xl font-semibold mb-5">
            📱 Social Media
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <strong>Platform</strong>
              <p>{analysis.social_media.best_platform}</p>
            </div>

            <div>
              <strong>Aspect Ratio</strong>
              <p>{analysis.social_media.aspect_ratio}</p>
            </div>

            <div>
              <strong>Content Type</strong>
              <p>{analysis.social_media.content_type}</p>
            </div>

            <div>
              <strong>Best Time</strong>
              <p>{analysis.social_media.best_posting_time}</p>
            </div>

          </div>

        </div>

        {/* Caption */}

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 mt-6">

          <h2 className="text-2xl font-semibold mb-4">
            ✍ Caption
          </h2>

          <pre className="whitespace-pre-wrap">
            {JSON.stringify(analysis.captions, null, 2)}
          </pre>

        </div>

        {/* Hashtags */}

        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 mt-6">

          <h2 className="text-2xl font-semibold mb-4">
            #️⃣ Hashtags
          </h2>

          <div className="flex flex-wrap gap-2">

            {analysis.hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-600 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}