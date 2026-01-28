import { useEffect, useState } from "react";

function Contact() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
        });

    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);

    const FORM_ENDPOINT = "https://formspree.io/f/xpqrayjg";

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        
        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) =>{
            if (response.ok){
                setSuccess(true);
                setFormData({name: "",email: "", message: ""});
            } else {
                setSuccess(false);
            }
            setSending(false);
        })
        .catch(() => {
            setSuccess(false);
            setSending(false);
        })

       
    }
        useEffect(() => {
            if (success !== null){
                const timer = setTimeout(() => setSuccess(null), 2000);
                return () => clearTimeout(timer);
            }
        }, [success])

    return(
        <section id="contact" className="contact section">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit} className="contact-form">
            <label>
                Name: 
                <input type="text" name="name" value={formData.name} onChange={handleChange} required></input>
            </label>

            <label >
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required></input> 
            </label>
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} required>
                </textarea>
            </label>
            <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
            {success === true && <p className="success-msg">Message sent successfully!</p>}
            {success === false && <p className="error-msg">Failed to send message. Try again.</p>}

            </form>
        </section>
    );

}

export default Contact;