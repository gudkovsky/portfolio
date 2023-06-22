import React from "react";
import image from "../assets/avatar.svg";
import { Link } from "react-scroll";

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Banner = () => {
  return (
    <div className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div className="mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]">
            <span className="text-white">Я </span>
            <TypeAnimation className="text-accent" sequence={['разработчик', 2000, 'junior-фронтендер', 2000, 'ищу работу 😅', 2000, ]} speed={50} wrapper='span' repeat={Infinity}/>
          </div>
          <p className="mb-5"> Я начинающий разработчик, и я бы хотел стать частью коллектива.<br/>Я уверен, что могу внести свой вклад и стать достойным членом команды.<br/>Я верю, что работая вместе, мы можем превзойти все ожидания!🤟 </p>
          <div className="mb-10">
            <Link className="text-gradient text-[20px] btn-link  items-center self-start" to='work' smooth={true}>Моё портфолио</Link>
          </div>
          <div>
            <img src={image} alt="me" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
