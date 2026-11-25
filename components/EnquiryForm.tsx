"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/site";

const fields = [
  ["name", "Full name", "name"],
  ["organization", "Organization", "organization"],
  ["address1", "Address 1", "address-line1"],
  ["address2", "Address 2", "address-line2"],
  ["city", "City / Town", "address-level2"],
  ["country", "Country", "country-name"],
  ["fax", "Fax", "off"],
  ["email", "Email", "email"],
  ["industry", "Industry", "off"],
  ["products", "Products", "off"],
] as const;

/**
 * The site has no mail backend yet, so submitting opens the visitor's email
 * program with the enquiry filled in. Swap onSubmit for a server action or an
 * email service when one is chosen.
 */
export default function EnquiryForm({ product = "" }: { product?: string }) {
  const [note, setNote] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    if (!get("name") || !/^\S+@\S+\.\S+$/.test(get("email"))) {
      setNote("Add your full name and a valid email address so we can reply.");
      return;
    }
    const lines = fields.map(([k, label]) => `${label}: ${get(k)}`);
    const body = [...lines, "", get("message")].join("\n");
    const subject = `Enquiry from ${get("name")}${get("organization") ? `, ${get("organization")}` : ""}`;
    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote(`Your email program should open with the enquiry ready to send. If it doesn't, write to ${company.emails[0]}.`);
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3>Enquiry form</h3>
      {fields.map(([k, label, auto]) => (
        <label key={k}>
          {label}
          <input
            id={`q-${k}`}
            name={k}
            type={k === "email" ? "email" : "text"}
            autoComplete={auto}
            defaultValue={k === "products" ? product : undefined}
            required={k === "name" || k === "email"}
          />
        </label>
      ))}
      <label className="full">
        If you have any queries please write below
        <textarea id="q-message" name="message" rows={5} />
      </label>
      <button className="btn" type="submit">
        Submit enquiry
      </button>
      {note && (
        <p className="note" role="status">
          {note}
        </p>
      )}
    </form>
  );
}
