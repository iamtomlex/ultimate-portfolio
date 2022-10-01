import { useState } from 'react'
import './portfolio.css'
import { data } from './data'

const Portfolio = () => {
  const [state, setState]= useState(data)
  return (
    <section id='portfolio'>
      <h5>my recent work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
        {state.map(({ id,image,title,github,demo }) => (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt='portfolio-image' />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' rel='noreferrer' target='_blank'>
                Github
              </a>
              <a
                href={demo}
                className='btn btn-primary'
                target='_blank'
                rel='noreferrer'
              >
                live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
