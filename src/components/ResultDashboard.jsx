<div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

  <h2 className="text-2xl font-bold mb-6">
    📸 AI Review
  </h2>

  {analysis?.photo_tips && (
    <>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-400 mb-3">
          ✅ Strengths
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          {analysis.photo_tips.strengths?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-yellow-400 mb-3">
          💡 Improvements
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          {analysis.photo_tips.improvements?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

    </>
  )}

</div>