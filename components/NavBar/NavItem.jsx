import Link from "next/link";
import React from "react";
import { m } from "framer-motion";
import { useRouter } from "next/router";
export default function NavItem({ children, href }) {
  const router = useRouter();
  return (
    <m.li
      className={`flex items-center mx-3 my-2 text-xs font-semibold leading-snug  uppercase hover:text-neon  ${
        router.asPath === href
          ? "text-neon opacity-100"
          : "text-white opacity-75"
      }`}
      whileHover={{
        scale: 1.2,
        opacity: 1,
        originX: 0,
      }}
    >
      <Link href={href}>{children}</Link>
    </m.li>
  );
}
