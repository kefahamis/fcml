import Link from "next/link";
import type { CSSProperties } from "react";
import { summaries, type Product } from "@/lib/site";

/** Product photo, prepared from the original site's images by scripts/enhance_products.py. */
export function ProductPhoto({ product, eager = false }: { product: Product; eager?: boolean }) {
  return (
    <div className="ph">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/img/products/${product.slug}.jpg`}
        alt={product.name}
        width={1200}
        height={900}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link className="prod" href={`/products/${product.slug}`} style={{ "--i": index } as CSSProperties}>
      <ProductPhoto product={product} />
      <div className="bd">
        <span className="cat">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{summaries[product.slug] ?? product.desc}</p>
        <span className="more">See sizes and details</span>
      </div>
    </Link>
  );
}

export function EnquireCard({ index = 0 }: { index?: number }) {
  return (
    <article className="prod cta" style={{ "--i": index } as CSSProperties}>
      <span className="hand" aria-hidden="true">
        ?
      </span>
      <h3>Need a size or shape you don&apos;t see?</h3>
      <p>The choice of design is unlimited. Tell us the product and the quantity.</p>
      <Link className="btn" href="/enquiries">
        Send an enquiry
      </Link>
    </article>
  );
}
