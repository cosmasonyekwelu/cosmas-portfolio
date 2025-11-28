import { FaLinkedin, FaGithub } from "react-icons/fa6";
import "../styles/social.css";

export default function SocialIcons({ className }) {
  return (
    <div className={`social-icons ${className || ""}`}>
      
      <a
        href="https://www.linkedin.com/in/cosmasonyekwelu"
        aria-label="LinkedIn"
        className="social"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/cosmasonyekwelu"
        aria-label="GitHub"
        className="social"
      >
        <FaGithub />
      </a>

    </div>
  );
}
