function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Natanael Dobie. All rights reserved</p>
                <div className="social-links">
                    <a href="https://github.com/TheDutchman68" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/natanael-dobie-776059249/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:nd527589@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                </div>
                <a href="#hero" className="back-to-top">Back to top &#8593;</a>
            </div>        
        </footer>
    );
}

export default Footer;