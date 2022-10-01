import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        TOMLEX
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#aaa'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
        <a href='https://instagram'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com'>
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; all right reserved {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer
