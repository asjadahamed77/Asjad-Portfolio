import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import profile from "../assets/profile.png";
import { LuDownload } from "react-icons/lu";

const About = () => {
  return (
    <div id="about" className="py-28">
      <h1 className="relative w-fit bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-4xl font-bold ">
        About Me
        <span className="absolute -bottom-1 left-0 h-1 rounded-full bg-secondBlueLight w-2/5"></span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-12">
        <div>
          <div className="my-8 max-w-[800px] p-4">
            <p className="flex items-center gap-2">
              <HiOutlineClipboardDocumentList className="text-mainBlueLight dark:text-white  text-lg" />
              <span className="text-xl text-mainBlueLight dark:text-white font-medium">
                Bio
              </span>
            </p>
            <p className="mt-2 font-normal text-sm sm:text-base">
              I'm a Full Stack Software Engineer with expertise in the MERN
              stack (MongoDB, Express.js, React, Node.js). I build responsive,
              user-friendly web apps using Tailwind CSS, Framer Motion, and
              Redux. I follow best practices with Git and GitHub, and I care
              deeply about clean UI/UX. I'm also experienced with Next.js for
              building fast, scalable applications.
            </p>
          </div>
          <div className="flex flex-col  sm:flex-row gap-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 dark:border-white/20 dark:bg-white/5">
              <p className="flex items-center  gap-2">
                <RiGraduationCapFill className="text-mainBlueLight dark:text-white text-lg" />
                <span className="text-xl text-mainBlueLight dark:text-white font-medium">
                  Education
                </span>
              </p>
              <div className=" mt-2 flex  flex-col  sm:flex-row gap-12">
                <div>
                  <p className=" font-semibold">
                    BSc (Honours) in Software Engineering
                  </p>
                  <p className=" text-sm mt-1">
                    Sabaragamuwa University of Sri Lanka
                  </p>
                  <p className="mt-1 text-sm">2022 - Present</p>
                </div>
                <div>
                  <p className=" font-semibold">
                    G.C.E. A/L in Physical Science
                  </p>
                  <p className=" text-sm mt-1">Zahira College, Colombo</p>
                  <p className=" text-sm mt-1">2018 - 2020</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 dark:border-white/20 dark:bg-white/5 min-w-[300px]">
              <p className="flex items-center gap-2">
                <MdWork className="text-mainBlueLight dark:text-white text-lg" />
                <span className="text-xl text-mainBlueLight dark:text-white font-medium">
                  Experience
                </span>
              </p>
              <p className=" font-semibold mt-2">Full-Stack Developer</p>
              <p className=" text-sm mt-1">SoftCox</p>
              <p className=" text-sm mt-1">2024 - Present</p>
            </div>
          </div>
        </div>
        <div className="hidden xl:block flex-1  ">
          <div className="rounded-full w-40 h-40 overflow-hidden border-4 border-mainBlueLight dark:border-slate-100">
            <img
              src={profile}
              alt="Profile Image"
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
          <p className="mt-4 font-semibold text-lg">Asjad Ahamed</p>
          <p className="font-light text-sm ">Full-Stack Developer</p>

          <div className="mt-4">
            <a
              href="/Asjad-Ahamed-Resume.pdf"
              download
              className=" font-medium bg-gradient-to-r text-sm from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 dark:text-mainBlueLight text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90"
            >
              <LuDownload className="inline-block mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
