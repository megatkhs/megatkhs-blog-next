import Link from "next/link";
import type { AnchorHTMLAttributes, FC } from "react";

export const ContentLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
  ...attrs
}) => {
  const externalAttrs = !href?.startsWith("#")
    ? {
        rel: "noreferrer",
        target: "_blank",
      }
    : {};

  return href?.startsWith("/") ? (
    <Link href={href} {...attrs}>
      {children}
    </Link>
  ) : (
    <a href={href} {...attrs} {...externalAttrs}>
      {children}
    </a>
  );
};
