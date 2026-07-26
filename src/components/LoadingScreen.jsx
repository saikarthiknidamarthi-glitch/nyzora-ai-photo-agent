export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">

        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-indigo-500"></div>

        <h2 className="text-2xl font-bold">
          Analyzing Photos...
        </h2>

        <p className="mt-2 text-zinc-400">
          AI is reviewing your photography.
        </p>

      </div>
    </div>
  );
}