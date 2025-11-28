import { useState } from 'react';
import '../styles/contact.css';

// Replace with your Formspree or EmailJS endpoint. For Formspree use: https://formspree.io/f/your-id
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/your-id';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({loading:false, success:null, message:''});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(){
    const e = {};
    if(!form.name.trim()) e.name='Name is required';
    if(!form.email.trim()) e.email='Email is required';
    else if(!emailRegex.test(form.email)) e.email='Please enter a valid email';
    if(!form.subject.trim()) e.subject='Subject is required';
    if(!form.message.trim()) e.message='Message is required';
    setErrors(e);
    return Object.keys(e).length===0;
  }

  async function handleSubmit(e){
    e.preventDefault();
    if(!validate()) return;
    setStatus({loading:true, success:null, message:''});
    try{
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });
      if(res.ok){
        setStatus({loading:false, success:true, message:'Message sent! Thank you.'});
        setForm({name:'',email:'',subject:'',message:''});
      } else {
        const text = await res.text();
        setStatus({loading:false, success:false, message:'Failed to send message.'});
        console.error('form error', res.status, text);
      }
    } catch(err){
      setStatus({loading:false, success:false, message:'Network error. Try again.'});
      console.error(err);
    }
  }

  return (
    <main className='contact-page container'>
      <section className='contact-top'>
        <div className='contact-intro'>
          <h1>LET'S CONNECT</h1>
          <p>Say hello at <a href='mailto:onyecosmas@gmail.com'>onyecosmas@gmail.com</a></p>
          <p>For more info, here's my <a href='https://www.dropbox.com/scl/fi/a311x0bp5o0dmzkgwobzb/Cosmas-Onyekwelu-CV.pdf?rlkey=ia5l7s41nplblbbrz8970y34s&st=z8g2hku9&dl=0'>resume</a></p>
        </div>

        <form className='contact-form' onSubmit={handleSubmit} noValidate>
          <label>Name</label>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          {errors.name && <small className='err'>{errors.name}</small>}

          <label>Email</label>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          {errors.email && <small className='err'>{errors.email}</small>}

          <label>Subject</label>
          <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
          {errors.subject && <small className='err'>{errors.subject}</small>}

          <label>Message</label>
          <textarea rows="6" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
          {errors.message && <small className='err'>{errors.message}</small>}

          <div className='form-actions'>
            <button className='btn primary' type='submit' disabled={status.loading}>
              {status.loading? 'Sending...': 'SUBMIT'}
            </button>
          </div>

          {status.message && <p className={status.success? 'success':'error'}>{status.message}</p>}
        </form>
      </section>
    </main>
  )
}
