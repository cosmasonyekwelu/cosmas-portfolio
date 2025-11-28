import { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "../styles/footer.css";

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLICKEY;

export default function Footer() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Hide footer on Contact page
  if (pathname === "/contact") return null;

  async function handleFooterSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const formData = new FormData(e.target);

    const params = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
      subject: "Footer Contact Form",
    };

    try {
      await emailjs.send(SERVICE, TEMPLATE, params, PUBLICKEY);
      setMsg("Message sent!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setMsg("Failed to send message.");
    }

    setLoading(false);
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        {/* LEFT SECTION */}
        <div>
          <h3>LET'S CONNECT</h3>
          <p>
            Say hello at{" "}
            <a href="mailto:onyecosmas@gmail.com">onyecosmas@gmail.com</a>
          </p>

          <div className="social-row">
            <a
              href="https://www.linkedin.com/in/cosmasonyekwelu"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/cosmasonyekwelu"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/cosmasonyekwelu"
              aria-label="Twitter / X"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/cosmasonyekwelu"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} Cosmas Onyekwelu
          </p>
        </div>

        {/* FOOTER CONTACT FORM */}
        <form className="footer-form" onSubmit={handleFooterSubmit}>
          <label>Name</label>
          <input name="name" placeholder="John Doe" required />

          <label>Email</label>
          <input name="email" type="email" placeholder="name@email.com" required />

          <label>Message</label>
          <textarea name="message" placeholder="Hello Cosmas..." required />

          <button className="btn submit" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT"}
          </button>

          {msg && <p className="success">{msg}</p>}
        </form>

      </div>
    </footer>
  );
}
