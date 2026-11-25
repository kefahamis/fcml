import Link from "next/link";
import { PageHero } from "@/components/Sections";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title={
          <>
            We can&apos;t find <em>that page</em>
          </>
        }
        sub="The address may be mistyped, or the page may have moved."
        crumbs={[{ label: "Not found" }]}
      />
      <section>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <Link className="btn" href="/">
            Back to home
          </Link>
          <Link className="btn dark" href="/products">
            See the products
          </Link>
        </div>
      </section>
    </>
  );
}
