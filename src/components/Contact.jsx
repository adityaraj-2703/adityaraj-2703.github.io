import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { trackEvent } from '../utils/analytics';
import githubIcon from '../assets/github-icon.png';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      alert('Name and message fields cannot be empty.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    trackEvent('contact_form_submit', { name: form.name, email: form.email });

    emailjs
      .send(
        'service_k2am6ek',
        'template_rgqve6i',
        {
          from_name: form.name,
          to_name: 'Aditya',
          from_email: form.email,
          to_email: 'raj.adi@northeastern.edu',
          message: form.message,
        },
        '9R0bsiEIcWIL7JAra'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert('Something went wrong. Please email me directly at raj.adi@northeastern.edu');
      });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium text-slate-200">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What’s your name?"
              className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium text-slate-200">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What’s your email?"
              className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium text-slate-200">Your message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write a message"
              className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-400 focus:border-yellow-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <p className={styles.sectionSubText}>Available for</p>
        <h3 className="mt-2 text-3xl font-black text-white">Software, product, platform, and engineering opportunities</h3>

        <div className="mt-8 space-y-5 text-slate-200">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</div>
            <a href="mailto:raj.adi@northeastern.edu" className="mt-2 block text-lg text-white hover:text-yellow-300">
              raj.adi@northeastern.edu
            </a>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">GitHub</div>
            <a href="https://github.com/adityaraj-2703" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-3 text-lg text-white hover:text-yellow-300">
              <img src={githubIcon} alt="GitHub" className="h-8 w-8 invert" />
              github.com/adityaraj-2703
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');