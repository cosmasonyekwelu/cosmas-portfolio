import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi"; // LIVE DEMO arrow icon
import "../styles/home.css";
import SocialIcons from "../components/SocialIcons";
import Button from "../components/Button";

export default function Home() {
  return (
    <main className="home-page">

      {/* ========================
          HERO SECTION
      ========================= */}
      <section className="hero container">
        <div className="hero-left">
          <h1>HI, I AM<br/>COSMAS ONYEKWELU.</h1>

          <p className="lead">
            Full-stack & front-end engineer crafting accessible, fast, and user-friendly digital products.
          </p>

          <div className="actions">
            <Button text="Contact Me" href="/contact" />
            <SocialIcons />
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <img src="/assets/image.jpg" alt="Cosmas" />
          </div>
        </div>
      </section>

      {/* ========================
          FEATURED PROJECTS
      ========================= */}
      <section className="featured container">
        <h2>FEATURED PROJECTS</h2>
        <p className="muted">
          Selected real-world projects showcasing my experience in building full-stack and front-end applications.
        </p>

        <div className="projects-grid">

          {/* ZURA CRM */}
          <div className="project-card">
            <div className="thumb">
              <img src="/assets/zura-crm.png" alt="Zura CRM" />
            </div>

            <div className="project-info">
              <h3>Zura CRM</h3>
              <p className="muted">
                Full MERN CRM with JWT auth, role management, customer pipelines,
                notes, activities, and analytics dashboards.
              </p>

              <div className="meta">
                <span><strong>Year</strong> 2024</span>
                <span><strong>Role</strong> Full-Stack Developer</span>
              </div>

              <div className="project-links">
                <a
                  href="https://zuracrmfront-phz7.vercel.app/"
                  className="link-live"
                  target="_blank"
                >
                  LIVE DEMO <FiArrowUpRight className="icon" />
                </a>

                <a
                  href="https://github.com/cosmasonyekwelu/zuracrmfront"
                  target="_blank"
                  className="github-link"
                >
                  See on GitHub <FaGithub className="git-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* BTC GENERATOR (NO GITHUB ICON – PRIVATE REPO) */}
          <div className="project-card reverse">
            <div className="thumb">
              <img src="/assets/btc-generator.png" alt="BTC Generator" />
            </div>

            <div className="project-info">
              <h3>BTC Transaction Screenshot Generator</h3>
              <p className="muted">
                React tool pulling live blockchain data, computing USD history,
                and generating device-framed screenshots using html-to-image.
              </p>

              <div className="meta">
                <span><strong>Year</strong> 2024</span>
                <span><strong>Role</strong> Front-End Developer</span>
              </div>

              <div className="project-links">
                <a
                  href="https://bitcoin-transaction-screenshot-gene.vercel.app/"
                  className="link-live"
                  target="_blank"
                >
                  LIVE DEMO <FiArrowUpRight className="icon" />
                </a>
              </div>
            </div>
          </div>

          {/* TWITTERPLUS */}
          <div className="project-card">
            <div className="thumb">
              <img src="/assets/twitterplus.png" alt="TwitterPlus" />
            </div>

            <div className="project-info">
              <h3>TwitterPlus (X Clone)</h3>
              <p className="muted">
                MERN Twitter/X clone supporting tweets, likes, retweets, profiles,
                hashtags, search, notifications, DMs, and WebSocket real-time updates.
              </p>

              <div className="meta">
                <span><strong>Year</strong> 2025</span>
                <span><strong>Role</strong> Full-Stack Developer</span>
              </div>

              <div className="project-links">
                <a
                  href="https://twitterplusfront.vercel.app/"
                  className="link-live"
                  target="_blank"
                >
                  LIVE DEMO <FiArrowUpRight className="icon" />
                </a>

                <a
                  href="https://github.com/cosmasonyekwelu/twitterplusfront"
                  target="_blank"
                  className="github-link"
                >
                  See on GitHub <FaGithub className="git-icon" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================
          ABOUT SHORT PREVIEW
      ========================= */}
      <section className="about-preview container">
        <h2>ABOUT ME</h2>

        <p>
          I am a full-stack & front-end engineer based in Nigeria, passionate about 
          building accessible and performant digital products.  
          I focus on clean architecture, reusability, and user-first experiences.  
          When not coding, I enjoy learning new tools, UI design, and exploring tech innovations.
        </p>

        <a href="/about" className="about-link">
          MORE ABOUT ME <FiArrowUpRight className="icon" />
        </a>
      </section>

    </main>
  );
}
