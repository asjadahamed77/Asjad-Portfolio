import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { MdOutlineLanguage } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { PiCodeBlockBold } from "react-icons/pi";

import ajjistore from '../assets/projects/ajji-store.png';
import adminajjistore from '../assets/projects/admin-ajji-store.png';
import dtmedicalcentre from '../assets/projects/medical-centre.png'
import adminmedicalcentre from '../assets/projects/admin-medical-centre.png';
import servicio from '../assets/projects/servicio.jpeg';
import fusion from '../assets/projects/fusion-feast.png';
import { FaUserCog } from "react-icons/fa";


export  const projects = [
    {
        title: "Ajji-Store",
        subtitle: "E-Commerce Web Application for a Mobile Store",
        image: ajjistore,
        description: "Ajji-Store is a full-featured e-commerce platform built with the MERN stack, designed for selling mobile phones and accessories. It offers a smooth and responsive user experience with a focus on modern design and functionality.",
        keyFeatures: [
           { feature: "Built with MongoDB, Express.js, React, and Node.js"},
              { feature: "Styled using Tailwind CSS for a clean and responsive UI"},
              { feature: "Redux for efficient state management across the app"},
              { feature: "Email verification during user registration to ensure account authenticity and improve platform security"},
              { feature: "Integrated PayPal for secure online payments"},
              { feature: "Users can register, log in, update profiles, and track orders"},
              { feature: "Designed with a strong focus on UI/UX to enhance user engagement"},
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Node",
                icon: <FaNode />
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />
            },
            {
                name: "Redux",
                icon: <SiRedux />
            },
            {
                name: "PayPal",
                icon: <FaCcPaypal />
            },

        
        ],
        github: "https://github.com/asjadahamed77/Ajji-Store",
        live: "https://ajji-store-client.vercel.app",

    },
    {
        title: "Ajji-Store Admin Panel",
        subtitle: "Admin Dashboard for Managing the Ajji-Store",
        image: adminajjistore,
        description: "The Ajji-Store Admin Panel is a secure and efficient dashboard built with the MERN stack, enabling administrators to manage the e-commerce store with ease.",
        keyFeatures: [
            { feature: "Developed using MongoDB, Express.js, React, and Node.js"},
              { feature: "Tailwind CSS for a clean, responsive, and consistent UI"},
              { feature: "Redux for state management across the admin interface"},
              { feature: "Admin authentication for secure access"},
              { feature: "Manage users and products with full CRUD functionality"},
              { feature: "Search and category filters for streamlined product management"},
              { feature: "View and manage customer orders"},
              { feature: "Access detailed payment history"},
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Node",
                icon: <FaNode />
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />
            },
            {
                name: "Redux",
                icon: <SiRedux />
            },
            {
                name: "PayPal",
                icon: <FaCcPaypal />
            },
            
        ],
        github: "https://github.com/asjadahamed77/Ajji-Store",
        live: "https://ajji-store-admin.vercel.app",

    },
    {
        title: "DT Medical Centre",
        subtitle: "Doctor Appointment Booking Platform",
        image:  dtmedicalcentre,
        description: "DT Medical Centre is a modern web application built with the MERN stack, designed to streamline the process of booking medical appointments and managing doctor schedules.",
        keyFeatures : [
            { feature: "Built with MongoDB, Express.js, React, and Node.js" },
            { feature: "Styled using Tailwind CSS for a clean and responsive design" },
            { feature: "useContext for lightweight and effective state management" },
            { feature: "Users can filter doctors by category and view availability by date" },
            { feature: "Patients can select time slots and view real-time doctor availability" },
            { feature: "Option to pay at the hospital" },
            
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Node",
                icon: <FaNode />
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />
            },
        ],
        github: "http://github.com/asjadahamed77/DT-Medical-Centre",
        live: "https://dt-medical-centre-c.vercel.app",

    },
    {
        title: "DT Medical Centre Admin Panel",
        subtitle: "Admin & Doctor Dashboard for Appointment and Clinic Management",
        image: adminmedicalcentre ,
        description: "This admin dashboard extends the DT Medical Centre platform, enabling both administrators and doctors to manage key aspects of the clinic's operations.",
        keyFeatures: [
            {feature:"Built with the MERN stack and Tailwind CSS for performance and usability" },
            {feature:"Admin authentication for secure access" },
            {feature:"Admins can add new doctors with detailed profiles" },
            {feature:"Doctors can log in to update their availability, personal info, and schedule" },
            {feature:"Admins and doctors can manage appointments and view payment details" },
            {feature:"Admin dashboard provides an overview of all platform activity for better operational control" },
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Node",
                icon: <FaNode />
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />
            },
        ],
        github: "http://github.com/asjadahamed77/DT-Medical-Centre",
        live: "https://dt-medical-centre-admin.vercel.app",

    },
    {
        title: "Servicio",
        subtitle: "Service Provider Booking and Discovery Platform",
        image: servicio,
        description: "Servicio is a full-featured web application that connects users with service providers across various categories. Built with the MERN stack, it offers smooth user interaction and provider management.",
        keyFeatures: [
            {feature: "Developed using MongoDB, Express.js, React, and Node.js"},
            {feature: "Styled with Tailwind CSS for a modern, responsive UI"},
            {feature: "useContext used for efficient state management"},
            {feature: "Service providers can register, create profiles, and showcase their work through posts"},
            {feature: "Users can log in, search and filter providers, and view provider profiles"},
            {feature: "Users can bookmark providers, manage favorites, and book services"},
            {feature: "Clean, user-friendly interface with a focus on easy navigation and functionality"},
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />
            },
            {
                name: "Express",
                icon: <SiExpress />
            },
            {
                name: "Node",
                icon: <FaNode />
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />
            },
        ],
        github: "https://github.com/asjadahamed77/Servicio-Complete",
        live: "",

    },  
    {
        title: "Fusion Feast",
        subtitle: "Frontend Web Application for a Restaurant",
        image: fusion,
        description: "Fusion Feast is a vibrant and responsive restaurant web app built to enhance user engagement and streamline the dining experience.",
        keyFeatures: [
            {feature: "Developed using React, Framer Motion, and CSS3 for smooth animations and an eye-catching design"},
            {feature: "Search and category filter to easily browse menu items"},
            {feature: "Cart functionality for adding and managing food orders"},
            {feature: "Users can book tables and place orders directly from the site"},
            {feature: "Fully responsive design optimized for all screen sizes"},
        ],
        technologies: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "CSS3",
                icon: <SiCss3 />
            },
            {
                name: "Framer Motion",
                icon: <TbBrandFramerMotion />
            }
        ],
        github: "https://github.com/asjadahamed77/Fusion-Feast-Frontend",
        live: "https://fusion-feast-frontend.vercel.app/",

    },
]

export const skills = [
    {
        category: "Programming Languages",
        skills: [
            {
                skill: "JavaScript",
            },
            {
                skill: "Java",
            },
            {
                skill: "C",
            },
            {
                skill: "TypeScript",
            },
            
        ],
        icon: <MdOutlineLanguage />
    },
    {
        category: "Frontend Development",
        skills: [
            {
                skill: "React.js",
            },
            {
                skill: "Next.js",
            },
            {
                skill: "HTML",
            },
            {
                skill: "CSS",
            },
            {
                skill: "Tailwind",
            }
        ],
        icon: <FaCode />
    },
    {
        category: "Backend Development",
        skills: [
            {
                skill: "Node.js",
            },
            {
                skill: "Express.js",
            },
           
        ],
        icon: <IoCode />
    },
    {
        category: "Databases",
        skills: [
            {
                skill: "MongoDB",
            },
            {
                skill: "MySQL",
            },
           
        ],
        icon: <FaDatabase />
    },
    {
        category: "Tools & Technologies",
        skills: [
            {
                skill: "Git",
            },
            {
                skill: "GitHub",
            },
            {
                skill: "AWS",
            },
            {
                skill: "Cloudinary",
            },
            {
                skill: "Vercel",
            },
            {
                skill: "Postman",
            },
            {
                skill: "Figma",
            },
            

           
        ],
        icon: <PiCodeBlockBold />
    },
    {
        category: "Soft Skills",
        skills: [
            { skill: "Creative Problem Solving" },
            { skill: "Time Management" },
            { skill: "Issue Identifying" },
            { skill: "Creativity" }
        ],
        icon: <FaUserCog /> 
    }
]