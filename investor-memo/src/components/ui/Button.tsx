type Variant = "primary" | "secondary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition shadow-soft";

  const styles =
    variant === "primary"
      ? "bg-brand text-white hover:bg-brand-light"
      : variant === "secondary"
      ? "bg-background-card text-brand border border-neutral-100 hover:shadow-strong"
      : "text-brand hover:bg-brand/10";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
