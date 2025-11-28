import { useLocation } from "react-router-dom";
import '../styles/footer.css';

export default function Footer() {
  const { pathname } = useLocation();

  // Hide entire footer on Contact page
  if (pathname === "/contact") {
    return null;
  }

  return (
    <footer className='site-footer'>
      <div className='container footer-inner'>

        <div>
          <h3>LET'S CONNECT</h3>
          <p>
            Say hello at{" "}
            <a href="mailto:onyecosmas@gmail.com">onyecosmas@gmail.com</a>
          </p>

          <div className='social-row'>
            <a href="https://www.linkedin.com/in/cosmasonyekwelu" aria-label="LinkedIn">in</a>
            <a href="https://github.com/cosmasonyekwelu" aria-label="GitHub">gh</a>
            <a href="https://x.com/cosmasonyekwelu" aria-label="X">x</a>
            <a href="https://www.instagram.com/cosmasonyekwelu" aria-label="Instagram">ig</a>
          </div>

          <p className='copyright'>
            © {new Date().getFullYear()} Cosmas Onyekwelu
          </p>
        </div>

        <div className='contact-preview'>
          <form
            className='footer-form'
            onSubmit={(e)=>e.preventDefault()}
          >
            <label>Name</label>
            <input placeholder='John Doe' />

            <label>Email</label>
            <input placeholder='name@email.com' />

            <label>Message</label>
            <textarea placeholder='Hello Cosmas...' />

            <button className='btn submit' type='button'>SUBMIT</button>
          </form>
        </div>

      </div>
    </footer>
  );
}
