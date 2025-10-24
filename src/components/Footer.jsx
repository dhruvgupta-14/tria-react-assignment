import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary  py-6 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Branding */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-logo text-primary mb-2">Dhruv Gupta</h1>
          <p className="text-sm mt-1">
            Made by Dhruv Gupta. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/dhruv.gupta14_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/dhruvgupta-14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-gupta-9285692a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/D11537Pahariya"  
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:dhruvpahariya@692gmail.com"
              className="text-primary hover:text-accent transition-colors"
            >
              <AiOutlineMail size={24} />
            </a>
          </div>

          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-primary hover:text-accent underline"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className=" text-center  text-sm">
        &copy; {new Date().getFullYear()} Dhruv Gupta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
