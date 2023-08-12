import fs from "node:fs/promises";
import Link from "next/link";
import styles from "./page.module.css";
import { Main } from "../../_components/Main";
import { CONTENTS_DIR } from "../_utility/constance";
import { getPostMeta } from "../_utility/getPostMeta";
import { parseContent } from "../_utility/parseContent";
import type { Metadata } from "next";

type Params = {
  slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  const contents = await fs.readdir(CONTENTS_DIR);

  return contents.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const meta = await getPostMeta(params.slug);

  return {
    title: `${meta.title} | megatkhs`,
    description: meta.description,
  };
}

export default async function Posts({ params }: { params: Params }) {
  const meta = await getPostMeta(params.slug);
  const content = await parseContent(meta.matterFile.content);

  return (
    <Main>
      <article>
        <header className={styles.header}>
          <ol>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/posts'>ブログ</Link>
            </li>
          </ol>
          <time dateTime={meta.date}>{meta.date}</time>
          <h1>{meta.title}</h1>
          <p>{meta.description}</p>
          {meta.tags && (
            <ul>
              {meta.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </header>
        <div className={styles.content}>{content}</div>
      </article>
    </Main>
  );
}
