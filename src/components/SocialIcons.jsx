import '../styles/social.css';
export default function SocialIcons({className}){
  return (
    <div className={'social-icons '+(className||'')}>
      <a href="https://www.linkedin.com/in/cosmasonyekwelu" aria-label="LinkedIn" className='social'>in</a>
      <a href="https://github.com/cosmasonyekwelu" aria-label="GitHub" className='social'>gh</a>
    </div>
  )
}
