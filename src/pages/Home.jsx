import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Plans from "../components/Plans";
import Faq from "../components/Faq";
import Contact from "../components/Contacts";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
       <Services />
      <Plans />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;