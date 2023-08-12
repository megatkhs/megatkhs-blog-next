/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { FC, ImgHTMLAttributes } from "react";

export const ContentImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
  ...attrs
}) => {
  if (!src) return <span>src が指定されていません。</span>;

  return width && height ? (
    <Image alt={alt ?? "alt なし"} height={Number(height)} src={src} width={Number(width)} />
  ) : (
    <img alt={alt ?? "alt なし"} height={height} src={src} width={width} {...attrs} />
  );
};
