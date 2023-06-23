import React from "react";
import image from "../assets/hero.png";
import { Link } from "react-scroll";

import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]">
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
                className="text-[50px] font-bold leading-[0.8] lg:text-[100px] mb-10"
              >
                ИЛЬЯ <span>ГУДКОВ</span>
              </motion.h1>
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
              >
                <span className="text-white">Я </span>
                <TypeAnimation className="text-accent" sequence={['разработчик', 2000, 'junior', 2000, 'фронтендер', 2000, 'ищу работу 😅', 2000, ]} speed={50} wrapper='span' repeat={Infinity}/>
              </motion.div>

            </div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className="mb-5"
             > 
              Я начинающий разработчик, и я бы хотел стать частью коллектива. Я уверен, что могу внести свой вклад и стать достойным членом команды. Я верю, что работая вместе, мы можем превзойти все ожидания!🤟 
            </motion.p>
            <motion.div 
              className="mb-10"
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
            >
              <Link className="cursor-pointer text-gradient text-[20px] btn-link items-center self-start" to='work' smooth={true}>Моё портфолио</Link>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className="flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/gudkovsky" target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
              <a href="https://t.me/gudkovsky" target="_blank" rel="noreferrer">
                <FaTelegram/>
              </a>
              <a href="https://wa.me/79778587980" target="_blank" rel="noreferrer">
                <FaWhatsapp/>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
          >
            <img src={image} alt="me" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
