"use client"
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import links from '../../Constans/NavLinks';

const ResponsiveNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggler = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <div className='flex md:hidden cursor-pointer md:cursor-none' onClick={toggler}>
            {
                !isOpen ? <Menu/> : <X/>

            }
        </div>
        <figure className={`absolute rounded-md right-2 origin-top top-10 w-auto bg-slate-800 p-2 transition-all z-50 
                ${isOpen ? "scale-y-100" : "scale-y-50 opacity-0 hidden"}`}>
        <nav className='w-full h-full flex-col space-y-2 capitalize font-normal tracking-wide'>
            <ul >
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link onClick={toggler} className='py-1 px-4 transition-all
                                    rounded-md hover:bg-slate-700 hover:text-sky-400' href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

            </nav>
        </figure>
        </>
    )
}

export default ResponsiveNav
