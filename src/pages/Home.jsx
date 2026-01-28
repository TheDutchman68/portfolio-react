import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
    return(
       <>
       <Hero/>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <Contact></Contact>
       </>
    );
}

export default Home;