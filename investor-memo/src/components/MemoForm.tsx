import { useState } from "react";
import Button from "./ui/Button";

export default function MemoForm() {
  const [ticker, setTicker] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault(); // prevent page reload
    console.log({ ticker }); // later: call backend
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto px-4 py-8 space-y-4">
      <label className="block text-sm font-medium text-neutral-700">
        Ticker or company
      </label>
      <input
        className="w-full rounded-xl border-neutral-200 focus:border-brand focus:ring-brand"
        placeholder="e.g., NVDA or Nvidia"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
      />
      <Button className="w-full">Generate Memo</Button>
    </form>
  );
}
