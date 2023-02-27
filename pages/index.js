import Typewriter from "typewriter-effect";
import Image from "next/image";
import Head from "next/head";
import Skills from "../components/Skills";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Aryan Shetty</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center pt-40">
        <section className="flex flex-col items-center w-full">
          <div className="mx-3 text-6xl lg:text-9xl text-neon font-dynalight ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hi I'm Aryan").pauseFor("5000").start();
              }}
              options={{ loop: true }}
            />
          </div>
          <h2 className="text-green-500 text:2xl lg:text-3xl font-montserrat">
            a <span className="italic">Software Engineer</span>
          </h2>
          <Image
            src="/man.png"
            alt="man"
            width={500}
            height={500}
            layout="intrinsic"
            priority
          />
        </section>
      </div>
      <Skills />
    </>
  );
}
