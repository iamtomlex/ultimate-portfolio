import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  const data1 = [
    {
      name: 'HTML',
      demo: 'Experienced',
    },
    {
      name: 'CSS',
      demo: 'intermediate',
    },
    {
      name: 'Javascript',
      demo: 'Experienced',
    },
    {
      name: 'Bootstrap',
      demo: 'Experienced',
    },
    {
      name: 'Tailwind',
      demo: 'Experienced',
    },

    {
      name: 'React',
      demo: 'Experienced',
    },
  ]

  const data2 = [
    {
      name: 'Node JS',
      demo: 'Experienced',
    },
    {
      name: 'MongoDb',
      demo: 'intermediate',
    },
    {
      name: 'PHP',
      demo: 'Experienced',
    },
    {
      name: 'MySQL',
      demo: 'Experienced',
    },
    {
      name: 'Python',
      demo: 'Basic',
    },
  ]

  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>frontend development</h3>
          <div className='experience__content'>
            {data1.map((exp, i) => {
              const { name, demo } = exp
              return (
                <article key={i} className='experience__details'>
                  <div className='experience__details-icon'>
                    <BsPatchCheckFill />
                  </div>
                  <div>
                    <h4>{name}</h4>
                    <small>{demo}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>backend development</h3>
          <div className='experience__content'>
            {data2.map((exp, i) => {
              const { name, demo } = exp
              return (
                <article key={i} className='experience__details'>
                  <div className='experience__details-icon'>
                    <BsPatchCheckFill />
                  </div>
                  <div>
                    <h4>{name}</h4>
                    <small>{demo}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
