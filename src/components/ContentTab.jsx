export default function ContentTab({ analysis }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          📱 Content & Social
        </h1>

        {/* Camera Review */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-6">
            📷 Camera Review
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold text-indigo-400">
                Composition
              </h3>
              <p className="text-zinc-300">
                {analysis?.camera_review?.composition || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-400">
                Lighting
              </h3>
              <p className="text-zinc-300">
                {analysis?.camera_review?.lighting || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-400">
                Framing
              </h3>
              <p className="text-zinc-300">
                {analysis?.camera_review?.framing || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-400">
                Exposure
              </h3>
              <p className="text-zinc-300">
                {analysis?.camera_review?.exposure || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-400">
                Focus
              </h3>
              <p className="text-zinc-300">
                {analysis?.camera_review?.focus || "N/A"}
              </p>
            </div>

          </div>
        </div>

        {/* Social Media */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-6">
            📱 Social Media
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <strong>Platform</strong>
              <p>{analysis?.social_media?.best_platform || "N/A"}</p>
            </div>

            <div>
              <strong>Aspect Ratio</strong>
              <p>{analysis?.social_media?.aspect_ratio || "N/A"}</p>
            </div>

            <div>
              <strong>Content Type</strong>
              <p>{analysis?.social_media?.content_type || "N/A"}</p>
            </div>

            <div>
              <strong>Best Posting Time</strong>
              <p>{analysis?.social_media?.best_posting_time || "N/A"}</p>
            </div>

            <div>
              <strong>Target Audience</strong>
              <p>{analysis?.social_media?.target_audience || "N/A"}</p>
            </div>

            <div>
              <strong>Reason</strong>
              <p>{analysis?.social_media?.reason || "N/A"}</p>
            </div>

          </div>
        </div>

        {/* Captions */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-6">
            ✍️ Captions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-green-400 font-semibold mb-2">
                Minimal
              </h3>
              <p className="whitespace-pre-wrap">
                {analysis?.captions?.minimal || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 font-semibold mb-2">
                Storytelling
              </h3>
              <p className="whitespace-pre-wrap">
                {analysis?.captions?.storytelling || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="text-purple-400 font-semibold mb-2">
                Professional
              </h3>
              <p className="whitespace-pre-wrap">
                {analysis?.captions?.professional || "N/A"}
              </p>
            </div>

          </div>
        </div>

        {/* Hashtags */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            #️⃣ Hashtags
          </h2>

          <div className="flex flex-wrap gap-2">
            {analysis?.hashtags?.map((tag, i) => (
              <span
                key={i}
                className="bg-indigo-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <h2 className="text-2xl font-bold mb-4">
            🔍 SEO Keywords
          </h2>

          <div className="flex flex-wrap gap-2">
            {analysis?.keywords?.map((keyword, i) => (
              <span
                key={i}
                className="bg-zinc-800 px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* SEO Description */}
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">
            📝 SEO Description
          </h2>

          <p className="text-zinc-300 whitespace-pre-wrap">
            {analysis?.seo_description || "N/A"}
          </p>
        </div>

      </div>
    </div>
  );
}