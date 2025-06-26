import React, { useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b8nbtzo",     
        "template_5tzj0ad",    
        form.current,
        "Sc7cUcLnAlRpr-N8L"     
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log("Email Sent");
          
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.div id="contact"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
    className="pt-28">
      <motion.h1
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
      className="relative w-fit bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-4xl font-bold ">
        Get in Touch
        <span className="absolute -bottom-1 left-0 h-1 rounded-full bg-secondBlueLight w-2/5"></span>
      </motion.h1>
      <motion.p
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
      className="mt-3 text-sm max-w-[500px] text-secondBlueLight  dark:text-slate-400">
        Have a question or want to work together? Feel free to drop me a
        message. I'd love to hear from you!
      </motion.p>
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        >
          <p className="text-xl font-semibold">Contact Information</p>
          <p className="text-sm text-secondBlueLight dark:text-slate-400 mt-2">
            Fill up the form and I'll get back to you as soon as possible.
          </p>
          <div className="mt-8 flex gap-4">
            <p>
              <HiOutlineMail className="text-2xl" />
            </p>
            <a
            href="mailto:ahamedasjad77@gmail.com"
            >
              <p className="font-semibold text-lg">Email</p>
              <p className="text-secondBlueLight  dark:text-slate-400">ahamedasjad77@gmail.com</p>
            </a>
          </div>
          <a
          href="tel:+94761257751"
          className="mt-4 flex gap-4">
            <p>
              <FiPhone className="text-2xl" />
            </p>
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-secondBlueLight  dark:text-slate-400">+94 76 125 7751</p>
            </div>
          </a>
          <div className="mt-4 flex gap-4">
            <p>
              <IoLocationOutline className="text-2xl" />
            </p>
            <div>
              <p className="font-semibold text-lg">Location</p>
              <p className="text-secondBlueLight  dark:text-slate-400">Kalutara, Sri Lanka</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mt-6">Connect with me</p>
            <div className="flex items-center gap-6 mt-4 ">
              <a href="https://github.com/asjadahamed77" target="_blank" rel="noopener noreferrer" className=" bg-slate-50 border border-slate-100 text-xl rounded-full p-2 hover:-translate-y-1 transform duration-300 dark:bg-white/5 dark:border-white/20 dark:hover:bg-white/10 dark:text-white hover:opacity-80">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/asjad-ahamed-71941b288" target="_blank" rel="noopener noreferrer" className=" bg-slate-50 border border-slate-100 text-xl rounded-full p-2 hover:-translate-y-1 transform duration-300 dark:bg-white/5 dark:border-white/20 dark:hover:bg-white/10 dark:text-white hover:opacity-80">
                <FiLinkedin />
              </a>
              <a href="mailto:ahamedasjad77@gmail.com" target="_blank" rel="noopener noreferrer" className=" bg-slate-50 border border-slate-100 text-xl rounded-full p-2 hover:-translate-y-1 transform duration-300 dark:bg-white/5 dark:border-white/20 dark:hover:bg-white/10 dark:text-white hover:opacity-80">
                <LuMail />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Email Form */}
        <motion.form ref={form} 
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
        onSubmit={sendEmail} className="bg-slate-50 border border-slate-200 p-6 rounded-xl h-fit flex-1 shadow dark:bg-white/5 dark:border-white/20">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1">
              <p className="font-medium ">Your Name</p>
              <input name="name" type="text" required placeholder="e.g. Asjad Ahamed" className="p-2 w-full mt-1 border border-slate-200 dark:border-slate-500 rounded outline-none focus:ring-2 ring-mainBlueLight" />
            </div>
            <div className="flex-1">
              <p className="font-medium ">Your Email</p>
              <input name="email" type="email" required placeholder="e.g. ajji@example.com" className="p-2 w-full mt-1 border border-slate-200 dark:border-slate-500 rounded outline-none focus:ring-2 ring-mainBlueLight" />
            </div>
          </div>
          <div className="flex-1 mt-4">
            <p className="font-medium">Subject</p>
            <input name="subject" type="text" required placeholder="How can I help you?" className="p-2 w-full mt-1 border border-slate-200 dark:border-slate-500 rounded outline-none focus:ring-2 ring-mainBlueLight" />
          </div>
          <div className="flex-1 mt-4">
            <p className="font-medium ">Message</p>
            <textarea name="message" required placeholder="Type your message here..." className="p-2 w-full mt-1 border border-slate-200 dark:border-slate-500 rounded outline-none focus:ring-2 ring-mainBlueLight min-h-24 resize-none" />
          </div>
          <button type="submit" disabled={loading} className="w-full text-center mt-4 py-2 bg-mainBlueLight text-white dark:text-mainBlueLight dark:bg-white rounded-lg hover:opacity-75 duration-300">
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-500 mt-3 text-sm">Message sent successfully!</p>}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
