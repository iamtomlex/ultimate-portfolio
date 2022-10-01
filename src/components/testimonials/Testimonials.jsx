import { useState } from 'react'

import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import './testimonials.css'
import { data } from './data'

const Testimonials = () => {
  const [state, setState] = useState(data)
  return (
    <section id='testimonials'>
      <h5>review from clients</h5>
      <h2>testimonials</h2>

      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {state.map(({ avatar, name, review, id }) => (
          <SwiperSlide key={id} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt='' />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
