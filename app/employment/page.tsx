import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Shots } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Employment",
  description: "Vacancies at Friendship Container Manufacturers Ltd.",
};

export default function Employment() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            <em>Employment</em>
          </>
        }
        crumbs={[{ label: "Employment" }]}
      />
      <section className="alt">
        <div className="wrap">
          <div className="notice" data-reveal>
            <span className="eyebrow">Vacancies</span>
            <h2>Currently we have no vacancy.</h2>
            <p className="lead">Please keep checking for vacancies.</p>
            <Link className="btn" href="/about">
              About the company
            </Link>
          </div>
          <div style={{ maxWidth: 760 }}>
            <Shots />
          </div>
        </div>
      </section>
    </>
  );
}
