import Link from "next/link";
import { m } from "framer-motion";
function AboutItem({ href, icon, children }) {
  return (
    <Link passHref href={href}>
      <m.div
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
      </m.div>
    </Link>
  );
}

export default AboutItem;
