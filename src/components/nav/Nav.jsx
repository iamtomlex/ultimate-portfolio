import { useState, useEffect, useRef } from 'react'

import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const data = [
  {
    id: 1,
    url: '#',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: '#about',
    icon: <AiOutlineUser />,
  },
  {
    id: 3,
    url: '#experience',
    icon: <BiBook />,
  },
  {
    id: 4,
    url: '#services',
    icon: <RiServiceLine />,
  },
  {
    id: 5,
    url: '#contact',
    icon: <BiMessageSquareDetail />,
  },

]

const Nav = () => {
  const [nav, setNav] = useState(data)
  const [activeNav, setActiveNav] = useState('')

  return (
    <nav>
      {nav.map((link) => {
        const { id, url, icon } = link

        return (
          <a
            href={url}
            key={id}
            onClick={() => setActiveNav(url)}
            className={activeNav === url ? 'active' : ''}
          >
            {icon}
          </a>
        )
      })}
      
    </nav>
  )
}

export default Nav
