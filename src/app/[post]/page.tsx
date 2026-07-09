import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/content/blog.json";

export const dynamicParams = false;

type Params = { post: string };

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
  return {
    title: `${p.title} | ADP Accounting`,
    description: p.description,
    alternates: { canonical: `/${p.slug}/` },
    openGraph: { title: p.title, description: p.description, images: p.image ? [p.image] : [] },
  };
}

export default async function Post({ params }: { params: Promise<Params> }) {
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
            <Link href="/blog/" className="btn-outline">
              ← Späť na blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
