import React from "react";
import image from "../assets/avatar.svg";
import { Link } from "react-scroll";

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
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
              <span className="text-white">Я </span>
              <TypeAnimation className="text-accent" sequence={['разработчик', 2000, 'junior', 2000, 'фронтендер', 2000, 'ищу работу 😅', 2000, ]} speed={50} wrapper='span' repeat={Infinity}/>
            </div>
            <p className="mb-5"> Я начинающий разработчик, и я бы хотел стать частью коллектива.<br/>Я уверен, что могу внести свой вклад и стать достойным членом команды.<br/>Я верю, что работая вместе, мы можем превзойти все ожидания!🤟 </p>
            <div className="mb-10">
              <Link className="text-gradient text-[20px] btn-link  items-center self-start" to='work' smooth={true}>Моё портфолио</Link>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img src={image} alt="me" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
