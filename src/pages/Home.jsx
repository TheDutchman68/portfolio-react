import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return(
       <>
       <Hero/>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <Contact></Contact>
       <Footer></Footer>
       </>
    );
}

export default Home;