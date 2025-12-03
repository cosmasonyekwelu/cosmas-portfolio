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

  // NEW: validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (pathname === "/contact") return null;

  function validateForm(data) {
    const newErrors = {};

    // NAME
    if (!data.get("name")?.trim()) {
      newErrors.name = "Name is required.";
    }

    // EMAIL
    const email = data.get("email")?.trim();
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // MESSAGE
    if (!data.get("message")?.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleFooterSubmit(e) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const data = new FormData(e.target);

    // VALIDATE FIRST
    const isValid = validateForm(data);
    if (!isValid) {
      setLoading(false);
      return;
    }

    const params = {
      from_name: data.get("name"),
      from_email: data.get("email"),
      message: data.get("message"),
      subject: "Footer Contact Form",
    };

    try {
      await emailjs.send(SERVICE, TEMPLATE, params, PUBLICKEY);
      setMsg("Message sent!");
      e.target.reset();

      // CLEAR ERRORS AFTER SUCCESS
      setErrors({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setMsg("Failed to send message.");
    }

    setLoading(false);
  }

  // Handle typing = clear specific field error
  function handleInputChange(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : prev[name],
    }));
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">

        {/* LEFT COLUMN */}
        <div className="footer-left">
          <h3>LET’S CONNECT</h3>

          <p className="footer-text">
            Say hello at{" "}
            <a href="mailto:onyecosmas@gmail.com">onyecosmas@gmail.com</a>
          </p>

          <p className="footer-text">
            For more info, here's my{" "}
            <a
              href="https://www.dropbox.com/scl/fi/a311x0bp5o0dmzkgwobzb/Cosmas-Onyekwelu-CV.pdf?rlkey=ia5l7s41nplblbbrz8970y34s&st=z8g2hku9&dl=0"
              target="_blank"
            >
              resume
            </a>
          </p>

          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/cosmasonyekwelu">
              <FaLinkedin />
            </a>
            <a href="https://github.com/cosmasonyekwelu">
              <FaGithub />
            </a>
            <a href="https://x.com/cosmasonyekwelu">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/cosmasonyekwelu">
              <FaInstagram />
            </a>
          </div>

          <p className="copyright-bottom">
            © {new Date().getFullYear()} Cosmas Onyekwelu
          </p>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <form className="footer-form" onSubmit={handleFooterSubmit}>
          <label>Name</label>
          <input
            name="name"
            placeholder="your name"
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="name@email.com"
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Hello Cosmas…"
            onChange={handleInputChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button className="btn submit" disabled={loading}>
            {loading ? "Sending..." : "SUBMIT"}
          </button>

          {msg && <p className="success">{msg}</p>}
        </form>
      </div>
    </footer>
  );
}
