import Image, { type ImageProps } from "next/image";

export type AppImageProps = ImageProps;

export function AppImage({ alt, sizes = "100vw", ...props }: AppImageProps) {
  return <Image alt={alt} sizes={sizes} {...props} />;
}
