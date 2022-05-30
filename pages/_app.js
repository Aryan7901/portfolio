import "../styles/globals.css";
import Nav from "../components/NavBar/Nav";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
