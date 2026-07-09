import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ochrana osobných údajov | ADP Accounting',
  description: 'Zásady spracovania a ochrany osobných údajov spoločnosti A.D.P. Accounting, s.r.o.',
  alternates: { canonical: "/ochrana-osobnych-udajov/" },
};

export default function Page() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "src/content/legal/ochrana-osobnych-udajov.html"),
    "utf8"
  );
  return (
    <main>
      <section className="bg-sand py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          <h1 className="text-h4 md:text-h2">Ochrana osobných údajov</h1>
          <span className="rule" />
        </div>
      </section>
      <article className="py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </main>
  );
}
