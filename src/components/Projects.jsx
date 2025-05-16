import React from "react";
import { projects } from "../assets/projects";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div id="projects" className="py-16">
      <h1 className="relative w-fit bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-4xl font-bold ">
        Projects
        <span className="absolute -bottom-1 left-0 h-1 rounded-full bg-secondBlueLight w-2/5"></span>
      </h1>
      <div className="my-8  grid xl:grid-cols-3 gap-8 space-y-4 md:space-y-0 sm:grid-cols-2">
        {projects.map((item, index) => (
          <div key={index} className="bg-slate-100 dark:bg-white/5 p-4 rounded-lg hover:-translate-y-2 transform duration-300">
            <div className="">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover min-w-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold mt-4 text-mainBlueLight dark:text-white">{item.title}</h1>
              <p className="text-sm font-semibold text-secondBlueLight dark:text-slate-400">{item.subtitle}</p>
              <p className="text-sm mt-4 ">{item.description}</p>
             

<div className="flex items-center gap-4 mt-4">
   {item.technologies.map((tech,index)=>(
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
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl cursor-pointer border border-slate-200 hover:text-white hover:bg-mainBlueLight duration-300 transition-colors dark:text-white dark:bg-mainBlueLight dark:hover:opacity-75 dark:border-white/10"
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl cursor-pointer border border-slate-200  hover:text-white hover:bg-mainBlueLight duration-300 transition-colors  dark:text-white dark:bg-mainBlueLight dark:hover:opacity-75 dark:border-white/10"
                  >
                    <span>
                      <FiGithub />
                    </span>
                    GitHub
                  </a>
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-20">
        <button className="w-fit px-6 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 cursor-pointer hover:bg-mainBlueLight hover:text-white duration-300 transition-all dark:bg-mainBlueLight/40 dark:text-slate-400 dark:border-slate-400">More Projects</button>
      </div>
    </div>
  );
};

export default Projects;
