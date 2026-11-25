"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories, company, products } from "@/lib/site";

const aboutLinks = [
  { href: "/about", label: "Company profile" },
  { href: "/quality", label: "Quality" },
  { href: "/employment", label: "Employment" },
];
const byCategory = categories.map((c) => ({ name: c, items: products.filter((p) => p.category === c) }));

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState<"products" | "about" | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes whatever is open; a click outside the nav closes a submenu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu(null);
      setDrawer(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (drawer) closeRef.current?.focus();
  }, [drawer]);

  const is = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const current = (href: string) => (is(href) ? "page" : undefined);
  const aboutActive = aboutLinks.some((l) => is(l.href));
  const close = () => {
    setMenu(null);
    setDrawer(false);
  };
  const toggle = (m: "products" | "about") => setMenu(menu === m ? null : m);

  return (
    <>
      <header className={"header" + (scrolled ? " is-scrolled" : "")}>
        <div className="wrap">
          <Link className="logo" href="/" aria-label={`${company.name}, home`} onClick={close}>
            {/* the company logo: reversed lettering on the dark header, original colours once the header turns light */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="on-dark" src="/img/logo-light.png" alt="Friendship Container Manufacturers Limited" width={254} height={98} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="on-light" src="/img/logo.png" alt="" aria-hidden="true" width={254} height={98} />
          </Link>

          <nav className="nav" aria-label="Main" ref={navRef}>
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={close}>
              Home
            </Link>

            <div className={"item" + (menu === "about" ? " open" : "")}>
              <button
                className={"top" + (aboutActive ? " active" : "")}
                type="button"
                aria-expanded={menu === "about"}
                aria-controls="sub-about"
                onClick={() => toggle("about")}
              >
                About us
              </button>
              <div className="sub" id="sub-about">
                {aboutLinks.map((l) => (
                  <Link key={l.href} href={l.href} aria-current={current(l.href)} onClick={close}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={"item" + (menu === "products" ? " open" : "")}>
              <button
                className={"top" + (is("/products") ? " active" : "")}
                type="button"
                aria-expanded={menu === "products"}
                aria-controls="sub-products"
                onClick={() => toggle("products")}
              >
                Products
              </button>
              <div className="sub mega" id="sub-products">
                {byCategory.map((c) => (
                  <div key={c.name}>
                    <span className="grp">{c.name}</span>
                    {c.items.map((p) => (
                      <Link key={p.slug} href={`/products/${p.slug}`} aria-current={current(`/products/${p.slug}`)} onClick={close}>
                        {p.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link className="all" href="/products" onClick={close}>
                  View all products
                </Link>
              </div>
            </div>

            <Link href="/applications" aria-current={current("/applications")} onClick={close}>
              Applications
            </Link>
          </nav>

          <Link className="btn" href="/enquiries" onClick={close}>
            Enquiries
          </Link>
          <button
            className="burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={drawer}
            aria-controls="drawer"
            onClick={() => setDrawer(true)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      <div className={"scrim" + (drawer ? " open" : "")} onClick={close} />
      <aside className={"drawer" + (drawer ? " open" : "")} id="drawer" aria-label="Menu" aria-hidden={!drawer}>
        <button className="x" type="button" aria-label="Close menu" ref={closeRef} onClick={close}>
          &#10005;
        </button>
        <nav aria-label="All pages">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={close}>
            Home
          </Link>
          <details open={aboutActive || undefined}>
            <summary>About us</summary>
            {aboutLinks.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.href)} onClick={close}>
                {l.label}
              </Link>
            ))}
          </details>
          <details open={is("/products") || undefined}>
            <summary>Products</summary>
            <Link href="/products" aria-current={pathname === "/products" ? "page" : undefined} onClick={close}>
              All products
            </Link>
            {byCategory.map((c) => (
              <div key={c.name}>
                <span className="grp">{c.name}</span>
                {c.items.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} aria-current={current(`/products/${p.slug}`)} onClick={close}>
                    {p.name}
                  </Link>
                ))}
              </div>
            ))}
          </details>
          <Link href="/applications" aria-current={current("/applications")} onClick={close}>
            Applications
          </Link>
          <Link href="/enquiries" aria-current={current("/enquiries")} onClick={close}>
            Enquiries
          </Link>
        </nav>
        <p>
          <b>Telephone</b>
          {company.phones[0]}
          <br />
          {company.mobiles[0]}
        </p>
        <p>
          <b>Email</b>
          {company.emails[0]}
          <br />
          {company.emails[1]}
        </p>
        <p>
          <b>Factory</b>
          {company.address}. {company.directions}
        </p>
      </aside>
    </>
  );
}
