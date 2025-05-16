import React from 'react'
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='pt-18 '>
      <h1  className="bg-clip-text text-center text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-4xl font-bold cursor-pointer">
          Asjad Ahamed.
        </h1>
        <div className='flex items-center justify-center gap-2 mt-2'>
            <p className='text-secondBlueLight text-lg dark:text-slate-300'><GrMail /></p>
            <p className='text-secondBlueLight text-sm dark:text-slate-300'>ahamedasjad77@gmail.com</p>
        </div>
        <hr className='mt-6 ' />
        <div className='flex flex-col sm:flex-row items-center justify-between pb-4 pt-2'>
            <p className='mt-2 text-sm dark:text-slate-300'>ⓒ 2025 Asjad Ahamed. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 xl:mt-0">
            <a
              href="https://github.com/asjadahamed77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-700 dark:text-slate-300 hover:opacity-80"
            >
                GitHub
            </a>
            |
            <a
              href="https://www.linkedin.com/in/asjad-ahamed-71941b288"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-700 dark:text-slate-300 hover:opacity-80"
            >
            LinkedIn
            </a>
            |
            <a
              href="https://www.instagram.com/asjad_ahd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-700 dark:text-slate-300 hover:opacity-80"
            >
            Instagram
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer
