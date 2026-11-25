import Link from "next/link";
import type { CSSProperties } from "react";
import { EnquireCard, ProductCard } from "@/components/Products";
import { Collage, EnquireBand, Pair, Process, QualityBlock, Strip, UsesList } from "@/components/Sections";
import { products } from "@/lib/site";

const d = (n: number) => ({ "--d": n }) as CSSProperties;
// one product from each part of the range for the home page
const featured = ["cylindrical-cans", "rectangular-cans", "pails-and-drums", "industrial-plastics", "screw-caps"].map(
  (s) => products.find((p) => p.slug === s)!,
);

export default function Home() {
  return (
    <>
      <div className="hero contours">
        <div className="wrap">
          <div className="copy">
            <span className="arc" aria-hidden="true" />
            <span className="eyebrow chv enter" style={d(0)}>
              Metal packaging since 1978
            </span>
            <h1 className="enter" style={d(1)}>
              A leading name in the <em>packaging</em> industry.
            </h1>
            <p className="enter" style={d(2)}>
              From modest beginnings in 1978, FCML has become established as Kenya’s leading fully comprehensive
              packaging company, supplying plain and decorated metal, plastic and composite containers and closures.
            </p>
            <div className="cta enter" style={d(3)}>
              <Link className="btn" href="/products">
                Our products
              </Link>
              <Link className="btn line" href="/enquiries">
                Send an enquiry
              </Link>
            </div>
          </div>
          <div
            className="art enter"
            style={d(4)}
            role="img"
            aria-label="Rows of metal bottle closures, with a close-up of a part being measured"
          >
            <div className="disc" />
            <div className="mini" />
            <div className="stamp">
              <small>Since</small>1978
            </div>
          </div>
        </div>
      </div>

      <Strip />

      <section>
        <div className="wrap about">
          <Collage />
          <div>
            <span className="eyebrow">Company profile</span>
            <h2 data-reveal>
              Packaging Kenya has <em>trusted since 1978</em>
            </h2>
            <p className="lead" data-reveal>
              Friendship Container Manufacturers Limited (FCML) makes all sizes and styles of metal containers, seamless
              and brilliantine cans, Roll-On-Pilfer-Proof (ROPP) caps, drums, pails, screw caps, plastic buckets,
              composite buckets and advertising materials such as posters and badges.
            </p>
            <Pair />
            <Link className="btn dark" href="/about">
              Company profile
            </Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="shead" data-reveal>
            <div>
              <span className="eyebrow">Our products</span>
              <h2>
                A full range of <em>containers and closures</em>
              </h2>
              <p className="lead">
                All types of exterior decoration and coatings are possible, and heights can vary as per customer
                requirements.
              </p>
            </div>
            <Link className="btn" href="/products">
              View all products
            </Link>
          </div>
          <div className="grid">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
            <EnquireCard index={featured.length} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap apps">
          <div className="side" data-reveal>
            <span className="eyebrow">Applications</span>
            <h2>
              FCML products are <em>suitable for</em>
            </h2>
            <p className="lead">Eleven kinds of product, from paints and oils to foods and files, go out in our packs.</p>
            <Link className="btn" href="/applications">
              See applications
            </Link>
          </div>
          <UsesList />
        </div>
      </section>

      <Process />

      <section className="alt">
        <QualityBlock link />
      </section>

      <EnquireBand />
    </>
  );
}
