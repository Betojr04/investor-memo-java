import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="max-w-2xl animate-slideUp">
        <h1 className="text-4xl sm:text-5xl font-heading text-brand mb-4">
          Welcome to Investor Memo
        </h1>
        <p className="text-neutral-700 mb-8">
          Generate professional-grade investment memos with AI precision.
        </p>
        <div className="flex gap-3">
          <Button>Get Started</Button>
          <Button variant="secondary">View Examples</Button>
        </div>
      </div>
    </section>
  );
}
