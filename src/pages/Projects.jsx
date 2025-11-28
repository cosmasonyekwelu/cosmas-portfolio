import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/projects.css";

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Zura CRM",
      year: 2024,
      role: "Full-Stack Developer (MERN)",
      img: "/assets/zura-crm.png",
      desc: "Full-stack CRM for SMEs: secure JWT auth, role-based access, customer pipelines, notes, activities, and analytics. Built with a clean React UI and a Postman-tested REST API.",
      live: "https://zuracrmfront-phz7.vercel.app/",
      git: "https://github.com/cosmasonyekwelu/zuracrmfront"
    },
    {
      id: 2,
      title: "BTC Transaction Screenshot Generator",
      year: 2024,
      role: "Frontend Developer",
      img: "/assets/btc-generator.png",
      desc: "React app that fetches live blockchain data, calculates historical USD value, and generates downloadable device-framed screenshots using html-to-image.",
      live: "https://bitcoin-transaction-screenshot-gene.vercel.app/",
      git: ""  // PRIVATE – no GitHub icon
    },
    {
      id: 3,
      title: "TwitterPlus",
      year: 2025,
      role: "Full-Stack Developer",
      img: "/assets/twitterplus.png",
      desc: "Complete MERN Twitter/X clone with tweets, likes, retweets, notifications, messaging, search, hashtags, media uploads, and real-time updates via WebSockets.",
      live: "https://twitterplusfront.vercel.app/",
      git: "https://github.com/cosmasonyekwelu/twitterplusfront"
    }
  ];

  return (
    <main className="projects-page container">

      <section className="projects-top">
        <h1>FEATURED PROJECTS</h1>
        <p className="muted">
          Real-world projects showcasing my growth as a full-stack and front-end engineer.
        </p>
      </section>

      <div className="projects-list">
        {projects.map((p, i) => (
          <article key={p.id} className={`proj ${i % 2 === 1 ? "reverse" : ""}`}>
            
            {/* Thumbnail */}
            <div className="proj-thumb">
              <img src={p.img} alt={p.title} />
            </div>

            {/* Content */}
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>

              <div className="meta">
                <span><strong>Year</strong> {p.year}</span>
                <span><strong>Role</strong> {p.role}</span>
              </div>

              <div className="links">
                {/* LIVE DEMO with arrow icon */}
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-live"
                >
                  LIVE DEMO <FiArrowUpRight className="icon" />
                </a>

                {/* GitHub only if repo is public */}
                {p.git && (
                  <a
                    href={p.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    See on GitHub <FaGithub className="git-icon" />
                  </a>
                )}
              </div>
            </div>

          </article>
        ))}
      </div>

    </main>
  );
}
