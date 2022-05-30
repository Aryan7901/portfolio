import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "../../components/Card";
import { github, link } from "../../components/svgs/Svg";
import ProjectLink from "../../components/ProjectLink";
export default function index() {
  const PROJECTS = [
    {
      src: "/blogmania.png",
      title: "Blog Mania",
      live: "aryan7901.github.io/myblog/#/",
      git: "github.com/Aryan7901/myblog",
      text: `    A blog web application where users can create an account ,create
  and publish their blogs which can be viewed and commented on by
  other users.`,
    },
    {
      src: "/chat-app.png",
      title: "Chat App",
      live: "aryan7901.github.io/chat-app/",
      git: "github.com/Aryan7901/chat-app",
      text: "A messaging app built using React and socket.io",
    },

    {
      src: "/sorting-visualizer.png",
      title: "Sorting Visualizer",
      live: "sorting-visualizer-kappa.vercel.app/",
      git: "github.com/Aryan7901/Sorting-Visualizer",
      text: ` A web app that visualises how different sorting algorithms work.`,
    },
    {
      src: "/next-events.png",
      title: "Next Events",
      live: "next-events-nu.vercel.app",
      git: "github.com/Aryan7901/NextEvents",
      text: `A web application that shows nearby events and featured events built using Next.js`,
    },
    {
      src: "/yelp-camp.png",
      title: "Yelp Camp",
      git: "github.com/Aryan7901/YelpCamp",
      live: "project-campgrounds.herokuapp.com/",
      text: `A web application which accepts new camp entries, displays them all on the home page, along with individual pages for each campground.(basic CRUD operations)`,
    },
    {
      src: "/monsters-rolodex.png",
      title: `Monster's Rolodex`,
      git: "github.com/Aryan7901/monsters-rolodex",
      live: "aryan7901.github.io/monsters-rolodex/",
      text: `A mini project in React where all the monsters (fetched from an api) whose name matches the characters in the input field would be displayed.(Uses Class components)`,
    },
  ];
  return (
    <>
      <Head>
        <title>Portfolio | Aryan Shetty</title>
        <meta name="description" content="Portfolio Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-screen pt-40">
        <h1 className="m-6 text-6xl font-semibold text-neon">Portfolio</h1>
        <h2 className="m-6 text-xl font-light text-white">
          More about my work and personal projects.
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <h2 className="mt-12 text-2xl text-white">Résumé</h2>
          <div className="m-6 text-lg text-neon">
            <a href="/aryan_resume.pdf" target="_blank">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/pdf-icon.png"
                  alt="Pdf Icon"
                  className="scale-110"
                  layout="fixed"
                  width="25"
                  height="25"
                />
                <p className="m-4">See My Résumé</p>
                <hr className="w-full bg-neon" />
              </motion.div>
            </a>
          </div>
          <h2 className="mt-20 text-2xl text-white">My Projects</h2>
          {PROJECTS.map((project, index) => {
            return (
              <Fragment key={index}>
                <Card src={project.src} alt={project.title}>
                  <h3 className="text-xl font-montserrat">{project.title}</h3>

                  <ProjectLink href={`https://${project.live}`} icon={link}>
                    {project.live}
                  </ProjectLink>
                  <ProjectLink href={`https://${project.git}`} icon={github}>
                    {project.git}
                  </ProjectLink>
                  <p>{project.text}</p>
                </Card>
              </Fragment>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
