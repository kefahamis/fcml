"use client";

import { useId, useMemo, useState } from "react";
import { categories, products } from "@/lib/site";
import { EnquireCard, ProductCard } from "./Products";

const filters = ["All", ...categories] as const;
type Filter = (typeof filters)[number];
type Sort = "range" | "az" | "sizes";

const sorts: { value: Sort; label: string }[] = [
  { value: "range", label: "By range" },
  { value: "az", label: "Name, A to Z" },
  { value: "sizes", label: "Most sizes first" },
];

/** Everything a visitor might type to find a product: name, range, description, sizes and closures. */
const haystack = (p: (typeof products)[number]) =>
  [p.name, p.category, p.desc, ...p.sizes, ...(p.extra ?? []), ...p.notes].join(" ").toLowerCase();

export default function ProductGrid() {
  const [cat, setCat] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("range");
  const searchId = useId();
  const sortId = useId();

  const q = query.trim().toLowerCase();
  const matchesQuery = useMemo(() => products.filter((p) => !q || haystack(p).includes(q)), [q]);
  const count = (f: Filter) => matchesQuery.filter((p) => f === "All" || p.category === f).length;

  const shown = useMemo(() => {
    const list = matchesQuery.filter((p) => cat === "All" || p.category === cat);
    if (sort === "az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "sizes") return [...list].sort((a, b) => b.sizes.length - a.sizes.length);
    return list;
  }, [matchesQuery, cat, sort]);

  const filtered = cat !== "All" || q !== "" || sort !== "range";
  const reset = () => {
    setCat("All");
    setQuery("");
    setSort("range");
  };

  return (
    <>
      <div className="filter">
        <div className="search">
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.500" />
            <path d="m16 16 4.500 4.500" />
          </svg>
          <label className="sr" htmlFor={searchId}>
            Search products
          </label>
          <input
            id={searchId}
            type="search"
            placeholder="Search by name or size, e.g. 28 mm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="clear" type="button" aria-label="Clear search" onClick={() => setQuery("")}>
              &#10005;
            </button>
          )}
        </div>

        <div className="pills" role="group" aria-label="Filter by range">
          {filters.map((f) => (
            <button
              key={f}
              className="pill"
              type="button"
              aria-pressed={f === cat}
              disabled={count(f) === 0 && f !== cat}
              onClick={() => setCat(f)}
            >
              {f}
              <span>{count(f)}</span>
            </button>
          ))}
        </div>

        <div className="sort">
          <label htmlFor={sortId}>Sort</label>
          <select id={sortId} value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fmeta" aria-live="polite">
        <span>
          Showing <b>{shown.length}</b> of {products.length} products
          {cat !== "All" && (
            <>
              {" "}
              in <b>{cat}</b>
            </>
          )}
          {q && (
            <>
              {" "}
              matching “<b>{query.trim()}</b>”
            </>
          )}
        </span>
        {filtered && (
          <button className="reset" type="button" onClick={reset}>
            Reset filters
          </button>
        )}
      </div>

      {shown.length > 0 ? (
        // key restarts the card entrance animation whenever the result set changes
        <div className="grid" key={`${cat}|${q}|${sort}`}>
          {shown.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
          <EnquireCard index={shown.length} />
        </div>
      ) : (
        <div className="empty">
          <h3>No products match that search</h3>
          <p>Try a different word or size, or ask us directly. The choice of design is unlimited.</p>
          <button className="btn" type="button" onClick={reset}>
            Show all products
          </button>
        </div>
      )}
    </>
  );
}
