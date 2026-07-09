import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import posts from "@/content/blog.en.json";

export const metadata: Metadata = {
  title: "Blog | ADP Accounting - Accounting Bratislava",
  description:
    "Accounting, tax, and legislative news and updates for entrepreneurs in Slovakia — ADP Accounting blog.",
  alternates: {
    canonical: "https://adpacc.sk/en/blog-en/",
    languages: {
      "sk-SK": "https://adpacc.sk/blog/",
      "en-GB": "https://adpacc.sk/en/blog-en/",
      "x-default": "https://adpacc.sk/blog/",
    },
  },
};

export default function BlogEn() {
  return (
    <main>
      <section className="bg-sand py-16 md:py-24">
        <div className="wrap">
          <h1 className="text-h3 md:text-h1">Blog</h1>
          <span className="rule" />
          <p className="mt-8 max-w-2xl text-lead text-body">
            Latest updates on Slovak accounting, tax regulations, and legislations.
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/en/${p.slug}/`}
              className="group overflow-hidden rounded border border-line bg-white transition hover:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.07)]"
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt=""
                  width={800}
                  height={450}
                  className="aspect-[16/9] w-full object-cover"
                />
              )}
              <div className="p-6">
                {p.date && <p className="text-[12px] text-faint">{p.date}</p>}
                <h2 className="mt-2 font-heading text-h5 text-navy group-hover:underline">
                  {p.title}
                </h2>
                <p className="mt-3 text-small text-muted">{p.description}</p>
                <span className="mt-4 inline-block text-navsm font-semibold uppercase text-navy">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
