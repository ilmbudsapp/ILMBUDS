import { Link } from "wouter";

export type BreadcrumbItem = { label: string; href?: string };

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden="true" className="text-slate-400">/</span> : null}
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="text-emerald-700 underline-offset-2 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className={i === items.length - 1 ? "font-medium text-slate-900" : ""} aria-current={i === items.length - 1 ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
