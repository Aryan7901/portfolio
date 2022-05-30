import { m } from "framer-motion";
import { location, email, phone, cross, tick } from "../../components/svgs/Svg";
import AboutItem from "../../components/AboutItem";
import { sendForm } from "@emailjs/browser";
import useForm from "../../hooks/useForm";
import Head from "next/head";
import { useState } from "react";
const Contact = () => {
  const [sentState, setSentState] = useState(false);
  const [error, setError] = useState(true);
  const nameValidator = (name) => {
    if (name.length > 1) return true;
    else return false;
  };
  const emailValidator = (email) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)) return true;
    else return false;
  };
  const messageValidator = (message) => {
    if (message.length > 8) return true;
    else return false;
  };
  const nameState = useForm(nameValidator);
  const emailState = useForm(emailValidator);
  const messageState = useForm(messageValidator);
  const submitHandler = async (event) => {
    event.preventDefault();
    if (!messageState.error && !emailState.error && !nameState.error) {
      try {
        const response = await sendForm(
          "service_mgg9vue",
          "portfolio_8am49fe",
          event.target,
          `X8mcrSSYE95nneImr`
        );
        if (response.text === "OK") {
          setError(false);
          messageState.reset();
        }
      } catch (error) {
        setError(true);
      }
      setSentState(true);
    } else {
      messageState.touchHandler();
      emailState.touchHandler();
      nameState.touchHandler();
    }
  };
  return (
    <>
      <Head>
        <title>Contact | Aryan Shetty</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-screen pt-40">
        <h1 className="m-6 text-6xl font-semibold text-neon">Contact Me</h1>
        <h2 className="m-6 text-xl font-light text-white">
          Got an idea? Let&apos;s get in touch.
        </h2>
        <m.div
          className="flex flex-col m-20 gap-x-40 gap-y-10 lg:flex-row sm:scale-110"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <form className="flex flex-col" onSubmit={submitHandler}>
            <label className="m-6 text-xl font-light text-white">Name</label>
            <input
              name="name"
              onBlur={nameState.touchHandler}
              onChange={nameState.changeHandler}
              value={nameState.value}
              placeholder="John Smith"
              className="p-2 m-2 rounded-lg bg-slate-900 opacity-80 sm:w-96 focus:ring-2 focus:ring-neon focus:outline-none text-slate-200"
            />
            {nameState.error && nameState.touched && (
              <p className="mx-auto mt-2 text-orange-500">Name is required!</p>
            )}
            <label className="m-6 text-xl font-light text-white">Email</label>
            <input
              name="email"
              value={emailState.value}
              onBlur={emailState.touchHandler}
              onChange={emailState.changeHandler}
              placeholder="jsmith12@gmail.com"
              className="p-2 m-2 rounded-lg bg-slate-900 opacity-80 sm:w-96 focus:ring-2 focus:ring-neon focus:outline-none text-slate-200"
            />
            {emailState.error && emailState.touched && (
              <p className="mx-auto mt-2 text-orange-500">
                Please enter a valid Email!
              </p>
            )}

            <label className="m-6 text-xl font-light text-white">Message</label>
            <textarea
              name="message"
              value={messageState.value}
              onBlur={messageState.touchHandler}
              onChange={messageState.changeHandler}
              placeholder="You look great today!"
              className="p-2 m-2 rounded-lg h-36 bg-slate-900 opacity-80 sm:w-96 focus:ring-2 focus:ring-neon focus:outline-none text-slate-200"
            />
            {messageState.error && messageState.touched && (
              <p className="mx-auto mt-2 text-orange-500">
                Message is too short!
              </p>
            )}

            <m.button
              className="w-1/2 p-2 mx-auto my-3 border-2 rounded-lg outline-none text-neon border-neon hover:text-white "
              whileHover={{
                backgroundColor: "#1ed760",
                scale: 1.05,
              }}
              whileTap={{
                opacity: 0.8,
                scale: 0.95,
              }}
            >
              Send
            </m.button>
            {sentState && !error && (
              <p className="flex mx-auto mt-2 text-neon">
                Message Sent Successfully
                <span className="mx-2 my-auto">{tick}</span>
              </p>
            )}
            {sentState && error && (
              <p className="flex mx-auto mt-2 text-orange-500">
                Unable to send message
                <span className="mx-2 my-auto">{cross}</span>
              </p>
            )}
          </form>
          <div className="flex flex-col gap-6 mt-6 scale-90 sm:scale-100">
            <AboutItem href="mailto:aryanshetty7901@gmail.com" icon={email}>
              aryanshetty7901@gmail.com
            </AboutItem>
            <AboutItem href="tel:+917977507453" icon={phone}>
              +91 7977507453
            </AboutItem>
            <AboutItem
              href="https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0821978,72.7410993,11z/data=!3m1!4b1!4m5!3m4!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559"
              icon={location}
            >
              Mumbai, MH
            </AboutItem>
          </div>
        </m.div>
      </div>
    </>
  );
};
export default Contact;
