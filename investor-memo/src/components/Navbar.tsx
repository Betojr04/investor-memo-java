export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-brand" />
          <span className="font-heading text-lg">Investor Memo</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a className="text-neutral-700 hover:text-brand" href="#">
            Docs
          </a>
          <a className="text-neutral-700 hover:text-brand" href="#">
            Pricing
          </a>
          <a className="text-neutral-700 hover:text-brand" href="#">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
