import { TfiGithub } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
    return (
        <footer className="footer fade-in">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Natanael Dobie. All rights reserved</p>
                <div className="social-links">
                    <a href="https://github.com/TheDutchman68" target="_blank" rel="noopener noreferrer"><TfiGithub /> GitHub</a>
                    <a href="https://www.linkedin.com/in/natanael-dobie-776059249/" target="_blank" rel="noopener noreferrer"> <CiLinkedin /> LinkedIn</a>
                    <a href="mailto:nd527589@gmail.com" target="_blank" rel="noopener noreferrer"> <MdOutlineEmail /> Email</a>
                </div>
            </div>        
        </footer>
    );
}

export default Footer;