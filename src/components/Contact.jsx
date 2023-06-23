import React from 'react';
import {motion } from 'framer-motion'
import {fadeIn} from '../variants.js'

const Contact = () => {
  return <section className='lg:section py-16' id='contacts'>
    <div className='container mx-auto'>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex flex-col lg:flex-row'
      >
        <div className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Связаться со мной</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Давайте работать<br />вместе!</h2>
          </div>
        </div>

        <motion.form 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
        >
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Ваше имя'/>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Ваша почта'/>
          <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Ваше сообщение'></textarea>
          <button className='btn btn-lg self-end'>Отправить</button>
        </motion.form>
      </motion.div>
    </div>
  </section>;
};

export default Contact;
