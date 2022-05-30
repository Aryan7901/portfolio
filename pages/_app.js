import "../styles/globals.css";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer";
import { LazyMotion } from "framer-motion";
const loadFeatures = () =>
  import("../utils/features").then((res) => res.default);
function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="w-full min-h-screen overflow-hidden bg-black">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default MyApp;
