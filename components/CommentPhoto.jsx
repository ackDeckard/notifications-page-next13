"use client";
import Image from "next/image";
import React from "react";

const myphotos = [
  {
    id: "1",
    imgUrl: "/image-chess.webp",
  },
];

function CommentPhoto() {
  return (
    <Image
      src={myphotos[0].imgUrl}
      alt="user photo"
      width={0}
      height={0}
      unoptimized
      className="mt-1 inline-block h-9 w-9 hover:cursor-pointer"
    ></Image>
  );
}

export default CommentPhoto;
