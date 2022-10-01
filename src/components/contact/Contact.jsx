import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react'
import emailjs from 'emailjs-com'

const data = [
  {
    icon: <MdOutlineEmail />,
    socialName: ' email',
    title: 'tomlex3100@gmail.com',
    url: 'mailto:tomlex3100@gmail.com',
  },
  {
    icon: <RiMessengerLine />,
    socialName: ' messenger',
    title: 'tomlex',
    url: 'https://m.me/tomi',
  },
  {
    icon: <BsWhatsapp />,
    socialName: 'whatsapp',
    title: '+2348110128085',
    url: 'https://api.whatsapp.com/send?phone+2348110128085',
  },
]

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_fi4vxs7',
      'template_pfb8xil',
      form.current,
      '66P4XaPC9GbWvdeL0'
    )
    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {data.map((contact, index) => {
            const { icon, socialName, title, url } = contact

            return (
              <article key={index} className='contact__option'>
                <div className='contact__option-icon'>{icon}</div>
                <h4>{socialName}</h4>
                <h5>{title}</h5>
                <a href={url} target='_blank' rel='noreferrer'>
                  Send a message
                </a>
              </article>
            )
          })}
        
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
