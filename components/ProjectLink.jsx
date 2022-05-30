import React from "react";
import { motion } from "framer-motion";
export default function ProjectLink({ href, children, icon }) {
  return (
    <motion.a
      href={href}
      className="flex items-center "
      whileHover={{ cursor: "pointer", scale: 1.1, color: "#1ed760" }}
      whileTap={{ scale: 0.95, color: "#1ed760" }}
    >
      <span className="mx-2">{icon}</span>
      {children}
    </motion.a>
  );
}
