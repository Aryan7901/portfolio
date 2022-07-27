import { useState } from "react";
import NavItem from "./NavItem";
import { m } from "framer-motion";

const navVariant = {
  initial: { x: "100vw" },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: "80",
    },
  },
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const NavItems = (
    <div className="lg:flex">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/portfolio">Portfolio</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </div>
  );
  return (
    <nav className="fixed top-0 z-10 flex flex-wrap items-center justify-between w-screen px-2 py-3 backdrop-blur">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        <div className="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
          <a className="inline-block py-2 mr-4 text-2xl leading-relaxed text-white whitespace-nowrap font-dynalight md:text-3xl">
            Aryan Shetty
          </a>
          <button
            className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="relative block w-6 h-px bg-white rounded-sm"></span>
            <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
            <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
          </button>
        </div>

        <div className="items-center flex-grow lg:flex">
          {open && (
            <m.ul
              className="flex flex-col ml-auto list-none lg:hidden "
              variants={navVariant}
              initial="initial"
              animate="animate"
            >
              {NavItems}
            </m.ul>
          )}
          <m.ul
            className="flex-row hidden ml-auto list-none lg:flex"
            variants={navVariant}
            initial="initial"
            animate="animate"
          >
            {NavItems}
          </m.ul>
        </div>
      </div>
    </nav>
  );
}
