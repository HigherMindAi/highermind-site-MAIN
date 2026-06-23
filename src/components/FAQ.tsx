interface FaqProps {
  items: [string, string][];
}

export default function FAQ({ items }: FaqProps) {
  return (
    <div className="faq reveal">
      {items.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>
            {q} <span className="pl">+</span>
          </summary>
          <div className="a">{a}</div>
        </details>
      ))}
    </div>
  );
}
