import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Faq from "../components/Faq";
import Contact from "../components/Contacts";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;