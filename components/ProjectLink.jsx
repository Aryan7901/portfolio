import React from "react";
import { m } from "framer-motion";
export default function ProjectLink({ href, children, icon }) {
  return (
    <m.a
      href={href}
      className="flex items-center "
      whileHover={{ cursor: "pointer", scale: 1.1, color: "#1ed760" }}
      whileTap={{ scale: 0.95, color: "#1ed760" }}
    >
      <span className="mx-2">{icon}</span>
      {children}
    </m.a>
  );
}
