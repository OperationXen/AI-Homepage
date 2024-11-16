import Image from "next/image";

import { Card } from "@mui/material";

import type { Image as ImageType } from "@/types/image";

type PropsType = {
  image: ImageType;
};

export function ImageCard(props: PropsType) {
  const { image } = props;

  const width = 256;
  const height = 256;

  return (
    <Card>
      <Image src={image.url} width={width} height={height} alt="" />
    </Card>
  );
}

export default ImageCard;
