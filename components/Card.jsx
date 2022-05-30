import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
export default function Card({ children, src, alt }) {
  return (
    <m.div
      className="flex flex-col justify-center w-11/12 m-12 md:flex-row "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Image
        src={src}
        alt={alt}
        width={540}
        height={300}
        layout="intrinsic"
        className="rounded-t md:rounded-l md:rounded-tr-none"
      />
      <div className="flex flex-col items-center gap-6 p-6 text-white rounded-b md:rounded-r md:rounded-bl-none md:w-1/3 bg-zinc-900">
        {children}
      </div>
    </m.div>
  );
}
