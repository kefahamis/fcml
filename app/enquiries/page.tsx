import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { ContactInfo, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Enquiries",
  description: "Contact Friendship Container Manufacturers Ltd: telephone, email, factory address and enquiry form.",
};

async function Form({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const p = (await searchParams).product;
  return <EnquiryForm product={typeof p === "string" ? p : ""} />;
}

export default function Enquiries({ searchParams }: PageProps<"/enquiries">) {
  return (
    <>
      <PageHero
        eyebrow="Enquiries"
        title={
          <>
            Tell us what you need to <em>pack</em>
          </>
        }
        sub="If you have any queries, call, write or send the enquiry form."
        crumbs={[{ label: "Enquiries" }]}
      />
      <section className="alt">
        <div className="wrap">
          <div className="contact" data-reveal>
            <ContactInfo />
            <Suspense fallback={<EnquiryForm />}>
              <Form searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
