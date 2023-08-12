import { createElement, Fragment } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype/lib";
import { ContentImage } from "../_components/ContentImage";
import { ContentLink } from "../_components/ContentLink";
import type { ReactElement } from "rehype-react/lib";

const processor = remark()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkBreaks)
  .use(remarkRehype, {
    allowDangerousHtml: true,
  })
  .use(rehypePrettyCode, {
    theme: "github-dark",
    keepBackground: false,
  })
  .use(rehypeRaw)
  .use(rehypeReact, {
    Fragment,
    createElement,
    components: {
      a: ContentLink,
      img: ContentImage,
    },
  });

export const parseContent = async (content: string): Promise<ReactElement> => {
  return (await processor.process(content)).result;
};
