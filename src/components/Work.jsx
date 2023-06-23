import React from 'react';
import {motion } from 'framer-motion'
import {fadeIn} from '../variants.js'
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-0 justify-between mb-10 lg:mb-0'
        >

          <div>
            <h2 className='h2 leading-light text-accent'>Последние<br/>работы</h2>
            <p className='max-w-sm mb-16'>Здесь представлены крайние проекты по стандартной и React верстке</p>
            <button className='btn btn-sm'>Посмотреть все</button>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'> </div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Text text </span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Title</span>
            </div>
          </div>

        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'
        >
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'> </div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Text text </span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Title</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'> </div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Text text </span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Title</span>
              </div>
            </div>
        </motion.div>

      </div>
    </div>


  </section>;
};

export default Work;
