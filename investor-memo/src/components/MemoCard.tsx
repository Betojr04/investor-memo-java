export default function MemoCard() {
  return (
    <article className="prose prose-neutral max-w-3xl mx-auto px-4 py-10 bg-background-card rounded-2xl shadow-soft">
      <h2>Investor Memo — NVDA</h2>
      <p>
        <strong>Summary:</strong> Nvidia leads in accelerated computing and AI
        infrastructure...
      </p>
      <h3>Bull Case</h3>
      <ul>
        <li>Dominant CUDA ecosystem and data center demand</li>
        <li>High-margin software & services optionality</li>
      </ul>
      <h3>Bear Case</h3>
      <ul>
        <li>Customer concentration and inventory cycles</li>
        <li>Competitive pressure (custom silicon)</li>
      </ul>
      <h3>What I’d Do</h3>
      <p>
        For a long-only investor with a 3–5y horizon: accumulate on pullbacks...
      </p>
    </article>
  );
}
