import { useState } from "react";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import UploadArea from "./components/UploadArea";
import ImagePreview from "./components/ImagePreview";
import LoadingScreen from "./components/LoadingScreen";
import ResultDashboard from "./components/ResultDashboard";

export default function App() {
  const [mode, setMode] = useState("quick");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!files.length) return alert("Select images");

    setLoading(true);

    try {
      const fd = new FormData();
      fd.append("Request Type", "Image");
      fd.append("mode", mode);
      files.forEach(f => fd.append("images", f));

      const res = await fetch(
        "https://twilight-stumbling-yearly.ngrok-free.dev/webhook/upload-image",
        {
          method: "POST",
          body: fd,
        }
      );

      let api = await res.json();

      if (Array.isArray(api)) api = api[0];

      setResult({
        success: api.success ?? api["success "],
        edited: api.edited ?? api["edited "],
        score: api.score ?? api["score "],
        analysis: api.analysis ?? api["analysis "],
        photo_ratings: api.photo_ratings,
      });

    } catch (e) {
      console.error(e);
      alert("API Error");
    }

    setLoading(false);
  };

  if (loading) return <LoadingScreen />;

  if (result)
    return <ResultDashboard {...result} />;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl p-8">
        <Header />
        <ModeToggle mode={mode} setMode={setMode} />
        <UploadArea onFileSelect={e => setFiles([...e.target.files].slice(0,3))}/>
        <ImagePreview files={files} removeImage={i=>setFiles(files.filter((_,x)=>x!==i))}/>
        <button
          onClick={handleAnalyze}
          className="mt-6 w-full rounded-xl bg-indigo-600 py-4"
        >
          Analyze Photos
        </button>
      </div>
    </div>
  );
}