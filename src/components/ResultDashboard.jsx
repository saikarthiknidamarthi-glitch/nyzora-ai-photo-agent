import { useState } from "react";
import OverviewTab from "./OverviewTab";
import ContentTab from "./ContentTab";

export default function ResultDashboard(props) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Tabs */}
      <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 z-10">
        <div className="max-w-5xl mx-auto flex">

          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-4 font-semibold transition ${
              activeTab === "overview"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            📊 Overview
          </button>

          <button
            onClick={() => setActiveTab("content")}
            className={`flex-1 py-4 font-semibold transition ${
              activeTab === "content"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            📱 Content
          </button>

        </div>
      </div>

      {activeTab === "overview" ? (
        <OverviewTab {...props} />
      ) : (
        <ContentTab {...props} />
      )}

    </div>
  );
}