import '../styles/about.css';
import SocialIcons from '../components/SocialIcons';
import Button from '../components/Button';

export default function About(){
  return (
    <main className='about-page container'>
      <section className='about-top'>
        <div className='about-left'>
          <h1>ABOUT ME</h1>
          <h2 className='about-headline'>I am a full-stack engineer based in Lagos. Has Mechanical Engineering background.</h2>
          <p className='muted'>I am looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently exploring Reactjs, Webflow and a bit of Designing.</p>
          <div className='about-actions'>
            <Button text='DOWNLOAD RESUME' href='https://www.dropbox.com/scl/fi/wbzhd8c9ai7glfcw29wgc/dec2025CV.pdf?rlkey=ixxqe5x2mi00lmabjfa0vz826&st=yo2rli9j&dl=0' />
            <SocialIcons />
          </div>
        </div>
        <div className='about-right'>
          <div className='about-photo'>
            <img src='/assets/img.jpg' alt='About Cosmas' />
          </div>
        </div>
      </section>

      <section className='capabilities'>
        <h2>MY CAPABILITIES</h2>
        <p className='muted'>I am always looking to add more skills.</p>
        <div className='chips'>
          {['HTML','CSS','JAVASCRIPT','JQUERY','ACCESSIBILITY','FIGMA','TAILWIND CSS'].map(c => <span key={c} className='chip'>{c}</span>)}
        </div>
      </section>

      <section className='experience'>
        <h2>MY EXPERIENCE</h2>
        <div className='exp-grid'>
          <div className='exp-item'>
            <h3>Freelance Developer</h3>
            <p className='muted'>Nov 2024 — Present</p>
            <p className='muted'> I design and develop responsive, user-friendly websites for small businesses and individuals.  
    My focus is on clean UI, accessibility, and performance to deliver seamless digital experiences.</p>
          </div>
          <div className='exp-item'>
            <h3>Front-End Intern <span className='muted small'>ValueGate Consulting</span></h3>
            <p className='muted'>Sep 2025 — Present</p>
            <p className='muted'> Supporting the development of internal dashboards and client-facing web applications.  
    Collaborating with senior engineers to implement React components, improve UI consistency,  
    and optimize web performance across devices.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
