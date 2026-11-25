import type { Metadata } from "next";
import { Libre_Baskerville, Quicksand, Urbanist } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/Header";
import { Icon } from "@/components/Icons";
import Motion from "@/components/Motion";
import { CurrentYear } from "@/components/Years";
import { categories, company } from "@/lib/site";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: "700", variable: "--font-baskerville" });

export const metadata: Metadata = {
  title: { default: `${company.name} | ${company.tagline}`, template: `%s | ${company.name}` },
  description:
    "Friendship Container Manufacturers Limited (FCML) is a leading name in the metal packaging industry since 1978: plain and decorated metal, plastic and composite containers and closures.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${quicksand.variable} ${urbanist.variable} ${baskerville.variable}`}>
      <body>
        <div className="topbar">
          <div className="wrap">
            <span className="l">
              <Icon name="badge" />
              ISO 9001:2000 certified company
            </span>
            <span className="l addr">
              <Icon name="pin" />
              Plot L3-38, Tatu City, Ruiru
            </span>
            <nav className="links" aria-label="Company">
              <Link href="/about">Company profile</Link>
              <Link href="/quality">Quality</Link>
              <Link href="/employment">Employment</Link>
            </nav>
            <div className="rounds">
              <a href={"tel:" + company.phones[0].replace(/\s/g, "")} aria-label={`Call ${company.phones[0]}`}>
                <Icon name="phone" />
              </a>
              <a href={`mailto:${company.emails[0]}`} aria-label={`Email ${company.emails[0]}`}>
                <Icon name="mail" />
              </a>
              <Link href="/enquiries" aria-label="Factory address">
                <Icon name="pin" />
              </Link>
            </div>
          </div>
        </div>

        <Suspense>
          <Header />
        </Suspense>

        <main>{children}</main>

        <footer>
          <div className="wrap fcols">
            <div>
              <Link className="logo" href="/" aria-label={`${company.name}, home`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/logo-light.png" alt="Friendship Container Manufacturers Limited" width={254} height={98} />
              </Link>
              <p>A leading name in the packaging industry since {company.since}.</p>
              <p>ISO 9001:2000 certified company.</p>
            </div>
            <div>
              <h3>Products</h3>
              {categories.map((c) => (
                <Link key={c} href="/products">
                  {c}
                </Link>
              ))}
            </div>
            <div>
              <h3>About us</h3>
              <Link href="/about">Company profile</Link>
              <Link href="/applications">Applications</Link>
              <Link href="/quality">Quality</Link>
              <Link href="/employment">Employment</Link>
            </div>
            <div>
              <h3>Enquiries</h3>
              <span>{company.phones[0]}</span>
              <span>{company.emails[0]}</span>
              <span>{company.address}</span>
              <span>{company.pobox}</span>
            </div>
          </div>
          <div className="fbar">
            <div className="wrap">
              <span>
                © <CurrentYear /> {company.name}
              </span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </footer>

        <Suspense>
          <Motion />
        </Suspense>
      </body>
    </html>
  );
}
