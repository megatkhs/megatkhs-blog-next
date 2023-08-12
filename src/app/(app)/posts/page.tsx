import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { CONTENTS_DIR } from "./_utility/constance";
import { getPostMeta } from "./_utility/getPostMeta";
import styles from "./page.module.css";
import { Main } from "../_components/Main";
import { PageHeader } from "../_components/PageHeader";
import type { Metadata } from "next";

const getAllPostMeta = async () => {
  const contents = await fs.readdir(CONTENTS_DIR);

  return Promise.all(
    contents.map(async (fileName) => {
      const slug = path.basename(fileName, ".md");
      return await getPostMeta(slug);
    })
  );
};

export const metadata: Metadata = {
  title: "ブログ | megatkhs",
  description: "megatkhsによるブログ投稿一覧です。",
};

export default async function Posts() {
  const posts = await getAllPostMeta();

  return (
    <Main>
      <PageHeader title='ブログ' description='megatkhsによるブログ投稿一覧です。' />
      <ul className={styles.posts}>
        {posts.map(({ slug, title, description, date, tags }) => (
          <li key={slug}>
            <Link className={styles.link} href={`/posts/${slug}`}>
              <article>
                <time dateTime={date}>{date}</time>
                <h1>{title}</h1>
                <p>{description}</p>
                {tags && (
                  <ul>
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Main>
  );
}
