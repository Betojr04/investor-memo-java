// import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-8">
      <div className="bg-background-card shadow-soft rounded-2xl p-10 max-w-lg animate-slideUp">
        <h1 className="text-4xl font-heading text-brand mb-4">
          Welcome to Investor Memo
        </h1>
        <p className="text-neutral-700 font-sans mb-6">
          Generate professional-grade investment memos with AI precision.
        </p>
        <button className="bg-brand-light hover:bg-brand text-white font-medium py-3 px-6 rounded-xl shadow-strong transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
