import React from 'react';

import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants.js';

const About = () => {
  const [ref, inView] = useInView({threshold: 0.5})
  return <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'
        >
          <h2 className='h2 text-accent text-xl mb-6'>Обо мне</h2>
          <h3 className='h3 mb-4'>Фронтенд-разработчик на javascript и React</h3>
          <p className='mb-4'>
            Начинающий разработчик, но опытный работник.
            Лидировал проект по разработке и внедрению веб-приложения по регистрации потенциальных опасностей в PepsiCo,прототипировал приложение и системы отчетности, алгоритмы процесса, UI/UX, базу данных, отвечал за тестирование и оптимизацию, а также продвижение. 
          </p>
          <div className='flex flex-col gap-y-6'>
            <div className='flex'> 
              <div className='text-[40px] text-gradient mb-2'>
                { inView ? <CountUp start={0} end={10} duration={3}/> : null}

              </div>
              <div className='ml-3 track-[2px]'>проектов завершено на текущий момент</div>

            </div>
            <div className='flex justify-start items-center gap-x-6'>
              <button className='btn btn-lg'>Связаться</button>
              <a href="#" className='text-gradient btn-link'>Портфолио</a>
            </div>
          </div>
        </motion.div>

      </div>


    </div>
  </section>;
};

export default About;
