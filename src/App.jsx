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
  const [analysis, setAnalysis] = useState(null);

  function handleFileSelect(event) {
    const selectedFiles = Array.from(event.target.files);

    if (selectedFiles.length > 3) {
      alert("Maximum 3 photos allowed.");
    }

    setFiles(selectedFiles.slice(0, 3));
  }

  function removeImage(index) {
    setFiles(files.filter((_, i) => i !== index));
  }

  async function handleAnalyze() {
    if (files.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("Request Type", "Image");
      formData.append("mode", mode);

      files.forEach((file) => {
        formData.append("images", file);
      });

      const response = await fetch(
        "http://localhost:5678/webhook/upload-image",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("HTTP Status:", response.status);

      const result = await response.json();

      console.log("========== N8N RESPONSE ==========");
      console.log(result);
      console.log("=================================");

      const analysisData =
        result.analysis ??
        result["analysis"] ??
        result["analysis "];

      if (!analysisData) {
        console.error("Analysis not found!", result);
        alert("Analysis not found.");
        return;
      }

      setAnalysis(analysisData);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to AI.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (analysis) {
    return <ResultDashboard analysis={analysis} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6">

        <Header />

        <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <ModeToggle
            mode={mode}
            setMode={setMode}
          />

          <div className="mb-6 text-center text-sm text-zinc-400">
            Current Mode :
            <span className="ml-2 font-semibold capitalize text-indigo-400">
              {mode}
            </span>
          </div>

          <UploadArea
            onFileSelect={handleFileSelect}
          />

          <ImagePreview
            files={files}
            removeImage={removeImage}
          />

          <button
            onClick={handleAnalyze}
            disabled={files.length === 0}
            className={`mt-8 w-full rounded-xl py-4 text-lg font-semibold transition ${
              files.length === 0
                ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            Analyze Photos
          </button>

        </div>

      </div>
    </div>
  );
}