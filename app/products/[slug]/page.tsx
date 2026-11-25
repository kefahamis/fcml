import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard, ProductPhoto } from "@/components/Products";
import { EnquireBand, PageHero } from "@/components/Sections";
import { getProduct, products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: product.name, description: `${product.name} from FCML. ${product.desc}` };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const i = products.indexOf(product);
  const prev = products[(i - 1 + products.length) % products.length];
  const next = products[(i + 1) % products.length];
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={product.category}
        title={product.name}
        sub={product.desc}
        crumbs={[{ href: "/products", label: "Products" }, { label: product.name }]}
      />

      <section>
        <div className="wrap">
          <div className="detail">
            <ProductPhoto product={product} eager />
            <div>
              <span className="eyebrow">Specifications</span>
              <h2 data-reveal>{product.sizeLabel}</h2>
              <div className="chips" style={{ marginTop: 22 }} data-reveal>
                {product.sizes.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              {product.notes.length > 0 && (
                <div className="spec" data-reveal>
                  <span className="h4">Specifications</span>
                  <ul className="list">
                    {product.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.extra && (
                <div className="spec" data-reveal>
                  <span className="h4">{product.extraLabel}</span>
                  <ul className="list">
                    {product.extra.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="cta">
                <Link className="btn" href={`/enquiries?product=${encodeURIComponent(product.name)}`}>
                  Enquire about this product
                </Link>
                <Link className="btn dark" href="/products">
                  All products
                </Link>
              </div>
            </div>
          </div>

          <nav className="pager" aria-label="More products">
            <Link href={`/products/${prev.slug}`}>
              <small>‹ Previous</small>
              <b>{prev.name}</b>
            </Link>
            <Link href={`/products/${next.slug}`}>
              <small>Next ›</small>
              <b>{next.name}</b>
            </Link>
          </nav>
        </div>
      </section>

      {related.length > 0 && (
        <section className="alt">
          <div className="wrap">
            <div className="shead" data-reveal>
              <div>
                <span className="eyebrow">{product.category}</span>
                <h2>
                  More from <em>this range</em>
                </h2>
              </div>
            </div>
            <div className="grid">
              {related.map((p, k) => (
                <ProductCard key={p.slug} product={p} index={k} />
              ))}
            </div>
          </div>
        </section>
      )}

      <EnquireBand />
    </>
  );
}
