import type { Metadata } from "next";
import { EnquireBand, Mission, PageHero, Process, QualityBlock } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Quality",
  description: "FCML is ISO 9001:2000 certified, with a documented quality management system, Total Quality Management and Kaizen.",
};

export default function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title={
          <>
            Quality is at the <em>heart of FCML</em>
          </>
        }
        sub="ISO 9001:2000 certified and fully compliant with health and environmental regulations."
        crumbs={[{ label: "Quality" }]}
      />
      <section>
        <QualityBlock />
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Mission />
        </div>
      </section>
      <Process />
      <EnquireBand />
    </>
  );
}
