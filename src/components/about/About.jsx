import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward, FaUser } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  const data = [
    {
      icon: <FaAward />,
      title: 'Experience',
      demo: '3+ Years Working',
    },
    {
      icon: <FaUser />,
      title: 'Clients',
      demo: '200+ worldwideg',
    },
    {
      icon: <VscFolderLibrary />,
      title: 'Projects',
      demo: '60+ completed',
    },
  ]

  return (
    <section id='about'>
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {data.map((boy, i) => {
              const { icon, title, demo } = boy
              return (
                <article key={i} className='about__card'>
                  <div className='about__icon'>{icon}</div>
                  <h5>{title}</h5>
                  <small>{demo}</small>
                </article>
              )
            })}
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            consectetur amet perferendis hic, porro eveniet consequatur
            cupiditate quis doloremque iste, velit itaque provident aspernatur
            similique tempora eius voluptate dolor optio?
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
