import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeadSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Haija Bintu</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeadSocials />

        <div className='me'>
          <img src={ME} alt='me' className='me__img' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
