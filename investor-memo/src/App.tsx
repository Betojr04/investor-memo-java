// import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MemoCard from "./components/MemoCard";
import MemoForm from "./components/MemoForm";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MemoForm />
      <MemoCard />
      <footer className="max-w-7xl mx-auto px-4 py-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Investor Memo
      </footer>
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="bg-background min-h-screen flex items-center justify-center p-8">
//       <div className="bg-background-card shadow-soft rounded-2xl p-10 max-w-lg animate-slideUp">
//         <h1 className="text-4xl font-heading text-brand mb-4">
//           Welcome to Investor Memo
//         </h1>
//         <p className="text-neutral-700 font-sans mb-6">
//           Generate professional-grade investment memos with AI precision.
//         </p>
//         <button className="bg-brand-light hover:bg-brand text-white font-medium py-3 px-6 rounded-xl shadow-strong transition">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }
