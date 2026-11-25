import type { Metadata } from "next";
import { Collage, EnquireBand, Mission, Pair, PageHero, Process, QualityBlock, Shots, UsesList } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Company profile",
  description:
    "From modest beginnings in 1978, FCML has become established as Kenya’s leading fully comprehensive packaging company.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Company <em>profile</em>
          </>
        }
        sub="From the traditional debe to a full range of metal, plastic and composite packaging."
        crumbs={[{ label: "Company profile" }]}
      />

      <section>
        <div className="wrap about">
          <Collage />
          <div>
            <span className="eyebrow">Since 1978</span>
            <h2 data-reveal>
              Kenya’s leading fully comprehensive <em>packaging company</em>
            </h2>
            <div className="prose" style={{ marginTop: 18 }} data-reveal>
              <p>
                From modest beginnings in 1978, FCML has become established as Kenya’s leading fully comprehensive
                packaging company supplying a full range of plain and decorated metal, plastic, and composite
                containers and closures for professional commodities and household consumables.
              </p>
              <p>
                From manufacturing the traditional “debe”, the universal four-gallon container once used for just about
                every liquid and solid commodity, FCML has introduced modern machinery and technology to enhance the
                product range.
              </p>
              <p>
                The company is capable of manufacturing all sizes and styles of metal containers, seamless and
                brilliantine cans, Roll-On-Pilfer-Proof (ROPP) caps, drums, pails, screw caps, plastics buckets,
                composite buckets and advertising materials like posters, badges etc. The choice of design is
                unlimited: plain, decorated, round, rectangular, irregular, minute to small to large all fitted with
                appropriate lids and closures.
              </p>
            </div>
            <Mission />
            <Shots />
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="shead" data-reveal>
            <div>
              <span className="eyebrow">What we stand on</span>
              <h2>
                Old craft, <em>modern machinery</em>
              </h2>
            </div>
          </div>
          <Pair />
        </div>
      </section>

      <Process />

      <section>
        <div className="wrap apps">
          <div className="side" data-reveal>
            <span className="eyebrow">Applications</span>
            <h2>
              FCML products are <em>suitable for</em>
            </h2>
          </div>
          <UsesList />
        </div>
      </section>

      <section className="alt">
        <QualityBlock link />
      </section>

      <EnquireBand />
    </>
  );
}
