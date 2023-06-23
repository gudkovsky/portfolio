import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import {motion } from 'framer-motion'
import {fadeIn} from '../variants.js'
import { Link } from 'react-scroll'

const skills = [
  {
    name: 'HTML-верстка',
    description: 'Семантическая, adaptive и responsive верстка страниц с использованием подхода БЭМ',
    link: 'Подробнее'
  },
  {
    name: 'CSS',
    description: 'LESS, SCSS, Styled-components, Tailwind, CSS-in-JS. Большинство современных подходов и инструментов использованы в проектах. Стилизация по Pixel-perfect',
    link: 'Подробнее'
  },
  {
    name: 'React',
    description: 'Верстка React-компонентов, использование хуков, библиотек - таких как swiper, yup и прочие. Работа со Storybook',
    link: 'Подробнее'
  },
]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
        >
          <h2 className='h2 text-accent mb-6'>Навыки</h2>
          <Link to='work' className='cursor-pointer py-3 btn btn-sm' activeClass='active' smooth={true} spy={true}>Посмотреть работы</Link>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'
        >
        <div>
          {skills.map((item, index) => {
            const {name, description, link} = item;

            return (
              <div className='border-b border-white/20 h-[146px] flex mb-[38px]' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-semibold mb-6'>{name}</h4>
                  <p className='leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  <a href="#" className='text-gradient text-sm'>
                    {link}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
      </div>

    </div>
  </section>;
};

export default Services;
