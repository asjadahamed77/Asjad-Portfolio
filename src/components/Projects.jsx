import React, { useState } from "react";
import { projects } from "../assets/projects";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="scroll-mt-20 pt-28"
    >
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative w-fit bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-4xl font-bold "
      >
        Projects
        <span className="absolute -bottom-1 left-0 h-1 rounded-full bg-secondBlueLight dark:bg-white w-2/5"></span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="my-8 grid xl:grid-cols-3 gap-8 space-y-4 md:space-y-0 sm:grid-cols-2"
      >
        {(showAll ? projects : projects.slice(0, 6)).map((item, index) => (
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            key={index}
            className="bg-slate-100 dark:bg-white/5 p-4 rounded-lg hover:-translate-y-2 transform duration-300"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="object-cover min-w-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold mt-4 text-mainBlueLight dark:text-white">
                {item.title}
              </h1>
              <p className="text-sm font-semibold text-secondBlueLight dark:text-slate-400">
                {item.subtitle}
              </p>
              <p className="text-sm mt-4 ">{item.description}</p>

              <div className="flex items-center gap-4 mt-4">
                {item.technologies.map((tech, index) => (
                  <p key={index} className="text-xl">
                    {tech.icon}
                  </p>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl cursor-pointer border border-slate-200 hover:text-white hover:bg-mainBlueLight duration-300 transition-colors dark:text-mainBlueLight dark:hover:opacity-75 dark:border-white/10"
                  >
                    <span>
                      <FiExternalLink />
                    </span>
                    Go Live
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl cursor-pointer border border-slate-200  hover:text-white hover:bg-mainBlueLight duration-300 transition-colors  text-mainBlueLight dark:hover:opacity-75 dark:border-white/10"
                  >
                    <span>
                      <FiGithub />
                    </span>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center mt-20"
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-fit px-6 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 cursor-pointer hover:bg-mainBlueLight hover:text-white duration-300 transition-all dark:bg-mainBlueLight/40 dark:text-slate-400 dark:border-slate-400"
        >
          {showAll ? "Show Less" : "More Projects"}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
