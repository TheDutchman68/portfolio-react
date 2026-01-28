import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Home() {
    return(
       <>
       <Hero/>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <Contact></Contact>
       <Footer></Footer>
       <BackToTop></BackToTop>
       </>
    );
}

export default Home;