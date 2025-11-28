import '../styles/home.css';
import SocialIcons from '../components/SocialIcons';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className='home-page'>

      {/* ========================
          HERO SECTION
      ========================= */}
      <section className='hero container'>
        <div className='hero-left'>
          <h1>HI, I AM<br/>COSMAS ONYEKWELU.</h1>
          <p className='lead'>
            Full-stack and front-end developer building fast, accessible, and user-friendly digital experiences.
          </p>

          <div className='actions'>
            <Button text="Contact Me" href="/contact" />
            <SocialIcons />
          </div>
        </div>

        <div className='hero-right'>
          <div className='hero-card'>
            <img src='/assets/image.jpg' alt='Cosmas' />
          </div>
        </div>
      </section>

      {/* ========================
          FEATURED PROJECTS
      ========================= */}
      <section className='featured container'>
        <h2>FEATURED PROJECTS</h2>
        <p className='muted'>
          Here are some real-world projects that highlight my growth as a full-stack and front-end engineer.
        </p>

        <div className='projects-grid'>

          {/* Zura CRM */}
          <div className='project-card'>
            <div className='thumb'>
              <img src='/assets/zura-crm.png' alt='Zura CRM' />
            </div>

            <div className='project-info'>
              <h3>Zura CRM</h3>
              <p className='muted'>
                Full MERN customer relationship manager with secure JWT auth, 
                role-based access, customer pipelines, activities, and analytics.
              </p>

              <div className='meta'>
                <span><strong>Year</strong> 2024</span>
                <span><strong>Role</strong> Full-Stack Developer</span>
              </div>

              <div className='project-links'>
                <a href="https://zuracrmfront-phz7.vercel.app/" className='link-live' target="_blank">
                  LIVE DEMO
                </a>
              </div>
            </div>
          </div>

          {/* BTC GENERATOR */}
          <div className='project-card reverse'>
            <div className='thumb'>
              <img src='/assets/btc-generator.png' alt='BTC Generator' />
            </div>

            <div className='project-info'>
              <h3>BTC Transaction Screenshot Generator</h3>
              <p className='muted'>
                React tool that fetches live blockchain data, calculates USD values, 
                and generates downloadable screenshots using html-to-image.
              </p>

              <div className='meta'>
                <span><strong>Year</strong> 2024</span>
                <span><strong>Role</strong> Front-End Developer</span>
              </div>

              <div className='project-links'>
                <a 
                  href="https://bitcoin-transaction-screenshot-gene.vercel.app/" 
                  className='link-live' 
                  target="_blank"
                >
                  LIVE DEMO
                </a>
              </div>
            </div>
          </div>

          {/* TWITTERPLUS */}
          <div className='project-card'>
            <div className='thumb'>
              <img src='/assets/twitterplus.png' alt='TwitterPlus' />
            </div>

            <div className='project-info'>
              <h3>TwitterPlus (X Clone)</h3>
              <p className='muted'>
                Full MERN Twitter/X clone: tweets, likes, retweets, profiles, 
                hashtags, search, DMs, notifications, and real-time updates with WebSockets.
              </p>

              <div className='meta'>
                <span><strong>Year</strong> 2025</span>
                <span><strong>Role</strong> Full-Stack Developer</span>
              </div>

              <div className='project-links'>
                <a 
                  href="https://twitterplusfront.vercel.app/" 
                  className='link-live' 
                  target="_blank"
                >
                  LIVE DEMO
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
