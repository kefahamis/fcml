import type { Metadata } from "next";
import Link from "next/link";
import { EnquireBand, PageHero, UsesList } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Applications",
  description: "What FCML containers and closures are suitable for: paints, solvents, oils, foods, pharmaceuticals, cosmetics and more.",
};

export default function Applications() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title={
          <>
            What goes in <em>our packs</em>
          </>
        }
        sub="FCML products are suitable for professional commodities and household consumables."
        crumbs={[{ label: "Applications" }]}
      />
      <section>
        <div className="wrap apps">
          <div className="side" data-reveal>
            <span className="eyebrow">Suitable for</span>
            <h2>
              FCML products are <em>suitable for</em>
            </h2>
            <p className="lead">
              Plain, decorated, round, rectangular, irregular, minute to small to large, all fitted with appropriate
              lids and closures.
            </p>
            <Link className="btn" href="/products">
              See the products
            </Link>
          </div>
          <UsesList />
        </div>
      </section>
      <EnquireBand title="Not sure which pack suits your product?" />
    </>
  );
}
