import React from "react";
import { skills } from "../assets/projects";
import { p } from "framer-motion/client";

const Skills = () => {
  return (
    <div id="skills" className="py-16">
      <h1 className="relative w-fit bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-4xl font-bold ">
        Skills
        <span className="absolute -bottom-1 left-0 h-1 rounded-full bg-secondBlueLight w-2/5"></span>
      </h1>
      <div className="grid grid-cols-3 gap-6 my-12  ">
        {skills.map((item, index) => (
          <div key={index} className="bg-slate-50 border group border-slate-100 rounded-lg p-6 hover:-translate-y-2 transform duration-300 dark:bg-white/5">
            <div className="flex items-center gap-4">
              <p className="text-lg p-2 bg-blue-100 group-hover:bg-mainBlueLight group-hover:text-white duration-300 transition-colors rounded-lg dark:bg-mainBlueLight/75 dark:border-blue-50 dark:border dark:group-hover:bg-white dark:group-hover:text-mainBlueLight">{item.icon}</p>
              <p className="text-lg font-semibold">{item.category}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skills, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 border border-slate-200 rounded-full text-sm dark:bg-white/10 dark:border-white/5"
                >
                  {skills.skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
