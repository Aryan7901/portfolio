import Link from "next/link";
import { motion } from "framer-motion";
function AboutItem({ href, icon, children }) {
  return (
    <Link passHref href={href}>
      <motion.div
        className="flex text-white hover:cursor-pointer"
        whileHover={{
          scale: 1.2,
          opacity: 1,
          originX: 0,
          color: "#1ed760",
        }}
        whileTap={{ scale: 0.95, color: "#1ed760" }}
      >
        {icon}
        <p className="mx-2 text-lg font-light ">{children}</p>
      </motion.div>
    </Link>
  );
}

export default AboutItem;
