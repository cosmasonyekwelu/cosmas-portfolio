import '../styles/button.css';
export default function Button({text, href, onClick, variant='primary'}){
  if(href){
    return <a className={'btn '+variant} href={href}>{text}</a>
  }
  return <button className={'btn '+variant} onClick={onClick}>{text}</button>
}
