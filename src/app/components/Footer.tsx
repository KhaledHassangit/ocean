import React, { ReactNode } from "react";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/Constans/Footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks: ReactNode[] = [
    <Facebook key="f" className="social-link" />,
    <Instagram key="i" className="social-link" />,
    <Twitter key="t" className="social-link" />,
    <Github key="g" className="social-link" />,
    <Youtube key="y" className="social-link" />,
  ];
  return (
    <footer className="pt-20 pb-4">
      <div className="container  mb-12 flex flex-col lg:flex-row ">
        <div className="basis-1/4 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6">
          <Link href="/" className='flex items-end gap-2'>
            <Image src="/logo.png" width={32} height={32} alt=' Logo' />
            <div className='relative'>
              <h1 className='capitalize text-white text-xl font-bold tracking-wide'>ocean</h1>
              <div className='absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700' />
            </div>
          </Link>
          <p className="text-lg">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            {socialLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-2/3 grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-0 lg:ps-8 gap-44">
          {footerColumns.map((col, index) => (
            <article
              key={index}
              className="capitalize flex flex-col md:text-center lg:text-start"
            >
              <h2 className="font-bold lg:text-lg text-slate-100 mb-6">
                {col.title}
              </h2>
              <ul>
                {col.links.map((link, index) => (
                  <li
                    key={index}
                    className="font-normal pb-3 hover:text-sky-600 hover:ps-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      {/* Links */}
      {/* Copyrights */}
      <div className="container border-t border-slate-700">
        <p className="capitalize pt-4 text-center lg:text-start">
          {`© ${currentYear} ocean, inc. all rights reserved.`}
        </p>
      </div>
      {/* Copyrights */}
    </footer>
  );
};

export default Footer;