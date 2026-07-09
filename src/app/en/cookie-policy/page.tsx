import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ADP Accounting",
  description: "Cookie Policy of A.D.P. Accounting, s.r.o. website.",
  alternates: {
    canonical: "https://adpacc.sk/en/cookie-policy/",
    languages: {
      "sk-SK": "https://adpacc.sk/cookies/",
      "en-GB": "https://adpacc.sk/en/cookie-policy/",
      "x-default": "https://adpacc.sk/cookies/",
    },
  },
};

export default function Page() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "src/content/legal/cookie-policy.html"),
    "utf8"
  );
  return (
    <main>
      <section className="bg-sand py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          <h1 className="text-h4 md:text-h2">Cookie Policy</h1>
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
