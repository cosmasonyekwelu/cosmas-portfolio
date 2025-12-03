import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE;
const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLICKEY;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate fields
  function validate() {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(form.email))
      e.email = "Please enter a valid email";

    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // Clear specific error on typing
  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => ({
      ...prev,
      [field]: value.trim() ? "" : prev[field],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setStatus({ loading: true, success: null, message: "" });

    const params = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE, TEMPLATE, params, PUBLICKEY);

      setStatus({
        loading: false,
        success: true,
        message: "Message sent! Thank you.",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});

    } catch (error) {
      console.error(error);

      setStatus({
        loading: false,
        success: false,
        message: "Failed to send message. Try again.",
      });
    }
  }

  return (
    <main className="contact-page container">
      <section className="contact-top">
        <div className="contact-intro">
          <h1>LET'S CONNECT</h1>
          <p>
            Say hello at{" "}
            <a href="mailto:onyecosmas@gmail.com">onyecosmas@gmail.com</a>
          </p>
          <p>
            For more info, here's my{" "}
            <a
              href="https://www.dropbox.com/scl/fi/a311x0bp5o0dmzkgwobzb/Cosmas-Onyekwelu-CV.pdf?rlkey=ia5l7s41nplblbbrz8970y34s&st=z8g2hku9&dl=0"
              target="_blank"
            >
              resume
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>Name</label>
          <input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <small className="err">{errors.name}</small>}

          <label>Email</label>
          <input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <small className="err">{errors.email}</small>}

          <label>Subject</label>
          <input
            value={form.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
          />
          {errors.subject && <small className="err">{errors.subject}</small>}

          <label>Message</label>
          <textarea
            rows="6"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {errors.message && <small className="err">{errors.message}</small>}

          <div className="form-actions">
            <button className="btn primary" type="submit" disabled={status.loading}>
              {status.loading ? "Sending..." : "SUBMIT"}
            </button>
          </div>

          {status.message && (
            <p className={status.success ? "success" : "error"}>
              {status.message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
