import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-center lg:gap-20 gap-16 p-8 lg:p-16 lg:mt-20 mt-28"
    >
      <motion.div
        initial={{ x: -70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-[500px] text-center md:text-left pt-12 sm:pt-0"
      >
        <p className="text-secondBlueLight font-medium dark:text-slate-100 animate-text-enter ">
          Hello! I'm
        </p>
        <h1 className="lg:text-6xl text-4xl text-mainBlueLight mt-4 font-bold dark:text-white typing-effect">
          Asjad <span className="">Ahamed</span>
        </h1>
        <p className="mt-4 text-mainBlueLight/80 dark:text-slate-200  text-lg animate-text-enter">
        Software Engineer | Full Stack Developer | MERN & Spring Boot | Building Scalable Web Apps with Clean Code & Cloud Integrations
        </p>
        <p className="mt-4 text-mainBlueLight/80 dark:text-slate-300 typing-effect">
          Building elegant solutions to complex problems with modern
          technologies.
        </p>
        <div className="mt-4 flex flex-col xl:flex-row items-center md:items-start xl:items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="font-medium bg-gradient-to-r text-sm lg:text-base from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 dark:text-mainBlueLight text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-slate-100 border text-sm lg:text-base border-slate-200 px-4 py-2 rounded-lg dark:bg-white/10 hover:opacity-70"
            >
              View Projects
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4 xl:mt-0">
            <a
              href="https://github.com/asjadahamed77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-700 dark:text-slate-400 hover:opacity-80"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/asjad-ahamed-71941b288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-700 dark:text-slate-400 hover:opacity-80"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:ahamedasjad77@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-700 dark:text-slate-400 hover:opacity-80"
            >
              <LuMail />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-[400px] h-auto bg-mainBlueLight/20 rounded-[40px]"
      >
        <img
          src={profile}
          alt="Profile Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
