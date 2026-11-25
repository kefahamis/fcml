import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { company, qualityPoints, steps, uses } from "@/lib/site";
import Aurora from "./Aurora";
import { Icon } from "./Icons";
import { YearsInBusiness } from "./Years";

const d = (n: number) => ({ "--d": n }) as CSSProperties;

export function PageHero({
  eyebrow,
  title,
  sub,
  crumbs = [],
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  crumbs?: { href?: string; label: string }[];
}) {
  return (
    <div className="phero contours">
      <div className="wrap">
        <span className="eyebrow chv enter" style={d(0)}>
          {eyebrow}
        </span>
        <h1 className="enter" style={d(1)}>
          {title}
        </h1>
        {sub && (
          <p className="sub enter" style={d(2)}>
            {sub}
          </p>
        )}
        <nav className="crumbs enter" style={d(3)} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: "contents" }}>
              <span aria-hidden="true">›</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function Collage() {
  return (
    <div className="collage" aria-hidden="true" data-reveal>
      <div className="sheet" />
      <span className="cap">Coiled steel, where tinplate starts</span>
      <div className="blk">
        <YearsInBusiness />
        <span>years in metal packaging</span>
      </div>
    </div>
  );
}

export function Mission() {
  return (
    <div className="mission" data-reveal>
      <small>Mission statement</small>
      {company.mission}
    </div>
  );
}

export function Pair() {
  return (
    <div className="pair" data-reveal>
      <div>
        <h3>It started with the debe</h3>
        <p>
          The universal four-gallon container once used for just about every liquid and solid commodity. Modern
          machinery and technology have widened the range ever since.
        </p>
      </div>
      <div>
        <h3>Unlimited choice of design</h3>
        <p>
          Plain, decorated, round, rectangular, irregular, minute to small to large, all fitted with appropriate lids
          and closures.
        </p>
      </div>
    </div>
  );
}

export function Shots() {
  const shots = [
    // stock photographs, not FCML's own premises; see public/img/SOURCES.md
    ["stock-line.jpg", "A production line in a factory hall", "Production line"],
    ["stock-machinery.jpg", "A row of industrial machinery", "Forming machinery"],
    ["stock-floor.jpg", "An operator working at a machine on a factory floor", "On the factory floor"],
  ];
  return (
    <div className="shots" data-reveal>
      {shots.map(([src, alt, cap]) => (
        <figure key={src}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/img/${src}`} alt={alt} loading="lazy" />
          <figcaption>{cap}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Strip() {
  return (
    <div className="wrap">
      <div className="strip" data-reveal>
        <article>
          <span className="n">
            <Icon name="can" />
            Heritage
          </span>
          <h3>Since 1978</h3>
          <p>From modest beginnings to Kenya’s leading fully comprehensive packaging company.</p>
        </article>
        <article>
          <span className="n">
            <Icon name="badge" />
            Quality
          </span>
          <h3>ISO 9001:2000</h3>
          <p>Certified, and fully compliant with health and environmental regulations.</p>
        </article>
        <article>
          <span className="n">
            <Icon name="gear" />
            Production
          </span>
          <h3>All in-house</h3>
          <p>From first design to printing to assembling and delivering.</p>
        </article>
      </div>
    </div>
  );
}

export function UsesList() {
  return (
    <ol className="uses" data-reveal>
      {uses.map((u) => (
        <li key={u}>{u}</li>
      ))}
    </ol>
  );
}

export function Process() {
  return (
    <section className="process">
      <Aurora />
      <div className="wrap">
        <div className="shead" data-reveal>
          <div>
            <span className="eyebrow">How we work</span>
            <h2>
              From first design to your door, <em>all in-house</em>
            </h2>
          </div>
          <p className="lead">
            The entire manufacturing process, from first design to printing to assembling and delivering, is done
            in-house at our production facilities.
          </p>
        </div>
        <ol className="lane">
          {steps.map((s, i) => (
            <li key={s.name} data-reveal style={d(i)}>
              <Icon name={s.icon} />
              <h3>{s.name}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function QualityBlock({ link = false }: { link?: boolean }) {
  return (
    <div className="wrap quality">
      <div className="seal" data-reveal>
        <small>Certified company</small>
        <b>ISO 9001:2000</b>
        <span>BVQI</span>
      </div>
      <div>
        <span className="eyebrow">Quality</span>
        <h2 data-reveal>
          Quality is at the <em>heart of FCML</em>
        </h2>
        <p className="lead" data-reveal>
          The company is ISO 9001:2000 certified and has an established and documented quality management system which
          addresses all areas. The directors and staff of FCML are committed to the development, implementation and
          continual improvement in the effectiveness of the quality management system.
        </p>
        <div className="facts" data-reveal>
          {qualityPoints.map((q) => (
            <div key={q.title}>
              <b>{q.title}</b>
              <span>{q.text}</span>
            </div>
          ))}
        </div>
        {link && (
          <Link className="btn dark" href="/quality" style={{ marginTop: 30 }}>
            Our quality system
          </Link>
        )}
      </div>
    </div>
  );
}

export function EnquireBand({ title = "Tell us what you need to pack" }: { title?: string }) {
  return (
    <div className="band">
      <div className="wrap">
        <div className="card" data-reveal>
          <div>
            <span className="eyebrow">Enquiries</span>
            <h2>{title}</h2>
            <p>Send us the product and the quantity, and we will come back to you about the pack.</p>
          </div>
          <div className="acts">
            <Link className="btn" href="/enquiries">
              Send an enquiry
            </Link>
            <a className="talk" href={"tel:" + company.phones[0].replace(/\s/g, "")}>
              <i>
                <Icon name="phone" />
              </i>
              <span>
                <small>Prefer to talk? Call us</small>
                {company.phones[0]}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactInfo() {
  const tel = (n: string) => "tel:" + n.replace(/[^+\d]/g, "");
  return (
    <div className="info">
      <h3>Sales desk</h3>
      <div className="row">
        <i>
          <Icon name="phone" />
        </i>
        <div>
          <small>Telephone</small>
          <a href={tel(company.phones[0])}>{company.phones[0]}</a>
          <br />
          <a href={tel(company.phones[1])}>{company.phones[1]}</a> / <a href={tel(company.phones[2])}>{company.phones[2]}</a>
          <br />
          Mobile <a href={tel(company.mobiles[0])}>{company.mobiles[0]}</a> /{" "}
          <a href="tel:+254733333012">{company.mobiles[1]}</a>
          <br />
          Fax {company.fax}
        </div>
      </div>
      <div className="row">
        <i>
          <Icon name="mail" />
        </i>
        <div>
          <small>Email</small>
          {company.emails.map((e) => (
            <span key={e} style={{ display: "block" }}>
              <a href={`mailto:${e}`}>{e}</a>
            </span>
          ))}
        </div>
      </div>
      <div className="row">
        <i>
          <Icon name="pin" />
        </i>
        <div>
          <small>Factory</small>
          {company.address}. {company.directions}
          <br />
          {company.pobox}
        </div>
      </div>
    </div>
  );
}
