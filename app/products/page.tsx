import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { EnquireBand, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Cylindrical, sanitary and rectangular cans, pails and drums, seamless tins, plastics, ROPP closures, screw caps and more from FCML.",
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title={
          <>
            Containers and <em>closures</em>
          </>
        }
        sub="A wide range of plain and decorated metal, plastic and composite containers and closures for professional commodities and household consumables."
        crumbs={[{ label: "Products" }]}
      />
      <section className="alt">
        <div className="wrap">
          <ProductGrid />
          <p className="unit">
            Can sizes use the trade&apos;s imperial notation: 307 means 3 and 7/16 inches. Three numbers give length ×
            width × height.
          </p>
        </div>
      </section>
      <EnquireBand title="Need a size or shape you don't see?" />
    </>
  );
}
