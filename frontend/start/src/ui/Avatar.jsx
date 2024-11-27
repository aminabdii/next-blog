import Image from "next/image";
import React from "react";

export const Avatar = ({ src, width, height = 24 }) => {
  return (
    <Image
      src={src}
      alt={src || ""}
      width={width}
      height={height}
      className="rounded-full"
    />
  );
};
