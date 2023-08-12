import fs from "node:fs/promises";
import path from "node:path";
import dayjs from "dayjs";
import matter from "gray-matter";
import { CONTENTS_DIR } from "./constance";
import type { GrayMatterFile } from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[] | null;
  matterFile: GrayMatterFile<string>;
};

export const getPostMeta = async (slug: string): Promise<PostMeta> => {
  const fileContent = await fs.readFile(path.join(CONTENTS_DIR, `${slug}.md`), "utf8");
  const matterFile = matter(fileContent);

  return {
    slug,
    title: matterFile.data.title,
    description: matterFile.data.description,
    date: matterFile.data.date && dayjs(matterFile.data.date).format("YYYY-MM-DD"),
    tags: matterFile.data.tags || null,
    matterFile,
  };
};
