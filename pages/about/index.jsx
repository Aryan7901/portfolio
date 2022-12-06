import Image from "next/image";
import { m } from "framer-motion";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Aryan Shetty</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-screen pt-40">
        <h1 className="m-6 text-6xl font-semibold text-neon">About Me</h1>
        <h2 className="m-6 text-xl font-light text-white">
          Let me tell you, who I am....
        </h2>
        <m.div
          className="flex flex-col justify-center gap-2 m-4 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/myImage.jpg"
            alt="man"
            width={300}
            height={300}
            layout="intrinsic"
            className="object-scale-down rounded-lg sm:w-1/2"
            priority
          />
          <div className="m-6 text-white sm:w-1/2">
            <p>
              Hello. My name is Aryan Shetty and I am a 4th year Computer
              Science Student at Manipal Institute of Technology.
              <br />I have a keen interest in web development and data science. I like
              learning about new technologies in my free time.
              <br /> Outside of programming, I enjoy travelling,theatre and
              watching anime.
            </p>
          </div>
        </m.div>
      </div>
    </>
  );
};

export default About;
