import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { m } from "framer-motion";
import Image from "next/image";
const Skills = () => {
  const skills = [
    { src: "/skills1.png", alt: "Html Css Javascript" },
    { src: "/react.jpg", alt: "React" },
    { src: "/next.png", alt: "Next" },
    { src: "/express.png", alt: "Express and Node" },
    { src: "/tailwind.jpg", alt: "Tailwind" },
    { src: "/bootstrap.png", alt: "Bootstrap" },
    { src: "/mui.png", alt: "Mui" },
    { src: "/mongo.png", alt: "MongoDB" },
    { src: "/MySql.jpg", alt: "MySql" },
    { src: "/svelte.png", alt: "Svelte" },
    { src: "/redux.jpg", alt: "Redux" },
  ];
  const codeString = `const SKILLS={
      Languages:
      [
        'Html','Css',
        'Python','Javascript',
        'C++','MySQL'
      ],
      JS_Frameworks:
      [
        'React','NextJS',
        'JQuery','Svelte',
        'Express'
      ],
      CSS_Frameworks:
      [
        'Bootstrap',
        'Tailwind',
        'MUI'
      ]
}`;
  return (
    <>
      <m.div
        className="text-center font-montserrat "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="m-2 text-6xl text-neon">Skills</h2>
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          className="scale-90"
          wrapLines
          wrapLongLines
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-5 m-auto my-5 scale-75 sm:grid-cols-4 lg:w-1/2 "
      >
        {skills.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.src}
              width={150}
              height={150}
              alt={item.alt}
              layout="responsive"
              className="rounded-3xl"
            />
          );
        })}
      </m.div>
    </>
  );
};

export default Skills;
