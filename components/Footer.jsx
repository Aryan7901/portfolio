import { m } from "framer-motion";
const hover = {
  scale: 1.2,
  opacity: 1,
  originX: 0,
  color: "#1ed760",
};
const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-white bg-black p-9 ">
      <section className="flex gap-8 font-bold">
        <m.a
          whileHover={hover}
          whileTap={{ scale: 0.95, color: "#1ed760" }}
          href="https://www.linkedin.com/in/aryan-shetty-ab5537214/"
        >
          LinkedIn
        </m.a>
        <m.a
          whileHover={hover}
          whileTap={{ scale: 0.95, color: "#1ed760" }}
          href="https://github.com/Aryan7901"
        >
          Github
        </m.a>
        <m.a
          whileHover={hover}
          whileTap={{ scale: 0.95, color: "#1ed760" }}
          href="https://www.instagram.com/aryan_7901/"
        >
          Instagram
        </m.a>
      </section>
      <p className="font-light">© 2022 Aryan Shetty.</p>
    </div>
  );
};

export default Footer;
