import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/content/blog.en.json";

export const dynamicParams = false;

type Params = { post: string };

const EN_SK_POSTS: Record<string, string> = {
  "current-legislative-changes-in-accounting-and-taxes-for-2025":
    "aktualne-legislativne-zmeny-v-uctovnictve-a-daniach-pre-rok-2025",
  "e-invoicing-and-accounting-digitalization-how-to-prepare-for-mandatory-changes":
    "elektronicka-fakturacia-a-digitalizacia-uctovnictva-ako-sa-pripravit-na-povinne-zmeny",
  "instant-payments-and-iban-verification-will-be-mandatory-from-october-9":
    "okamzite-platby-kontrola-prijemcu-od-oktobra-povinnost",
  "practical-advice-for-entrepreneurs-tax-optimization-and-effective-accounting":
    "prakticke-rady-pre-podnikatelov-danova-optimalizacia-a-efektivne-uctovnictvo",
  "vat-deduction-on-passengers-cars-from-1-january-2026":
    "odpocet-dph-na-motorove-vozidla-v-podnikani-20260101",
};

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ post: p.slug }));
}

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { post } = await params;
  const p = getPost(post);
  if (!p) return {};

  const skSlug = EN_SK_POSTS[post];
  const alternates: Record<string, string> = {
    "en-GB": `https://adpacc.sk/en/${p.slug}/`,
  };
  if (skSlug) {
    alternates["sk-SK"] = `https://adpacc.sk/${skSlug}/`;
    alternates["x-default"] = `https://adpacc.sk/${skSlug}/`;
  }

  return {
    title: `${p.title} | ADP Accounting`,
    description: p.description,
    alternates: {
      canonical: `https://adpacc.sk/en/${p.slug}/`,
      languages: alternates,
    },
    openGraph: { title: p.title, description: p.description, images: p.image ? [p.image] : [] },
  };
}

export default async function PostEn({ params }: { params: Promise<Params> }) {
  const { post } = await params;
  const p = getPost(post);
  if (!p) notFound();

  const html = fs.readFileSync(
    path.join(process.cwd(), "src/content/posts", `${p.slug}.html`),
    "utf8"
  );

  return (
    <main>
      <section className="bg-sand py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          {p.date && <p className="text-small text-muted">{p.date}</p>}
          <h1 className="mt-2 text-h4 md:text-h2">{p.title}</h1>
          <span className="rule" />
        </div>
      </section>
      <article className="py-14 md:py-20">
        <div className="wrap max-w-[900px]">
          {p.image && (
            <Image
              src={p.image}
              alt=""
              width={1200}
              height={675}
              priority
              className="mb-10 w-full rounded object-cover"
            />
          )}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="mt-14 border-t border-line pt-8">
            <Link href="/en/blog-en/" className="btn-outline w-full sm:w-auto">
              <span className="btn-roll">
                <span className="btn-roll-text" data-hover="← Back to blog">
                  ← Back to blog
                </span>
              </span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
