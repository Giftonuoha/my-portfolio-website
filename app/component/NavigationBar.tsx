'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import {FaBars, FaTimes  } from "react-icons/fa";
import { useState } from "react";
import LogoImg from "../../public/images/Logo.jpg";
import Image from "next/image";

const NavigationBar = () => {
    const currentPath = usePathname();
    const links = [
        {label: 'About', href: '#About'},
        {label: 'Projects', href: '#Projects'},
        {label: 'Testimonials', href: '#Testimonials'},
        {label: 'Contact', href: '#Contact'},
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
   
  return (
    <nav className="flex fixed shadow shadow-[#D1D1AD] w-full md:static justify-between lg:px-28 md:px-20 px-2 py-4 border-b items-center top-0 bg-black-100 z-10">
        {/* Logo Area */}
        <div className="flex w-full justify-between items-center">
            <div className="relative rounded-full justify-center flex items-center mx-4">
                <Image
                    src={LogoImg}
                    alt="Logo Image"
                    width={80}
                    height={80}
                    className="rounded-full md:w-[80px] md:h-[80px] w-11 h-11"
                />
                <span className="text-[#5B738B] text-3xl mx-2">Gift.</span>
            </div>
            {/* Mobile hanbarger menu */}
            <div onClick={handleMenu} 
            className="block md:hidden"
            >
                <FaBars size={30} className="text-[#D1D1AD]"/>
            </div>
        </div>

        {/* Desktop UL list Items */}
        <ul className="flex space-x-6">
            {
                links.map(link => 
                    <div key={link.href} className="hidden md:flex">
                        <Link
                        key={link.href}
                        className={classNames({
                            'text-[#dddd6e]' :link.href === currentPath,
                            'text-[#D1D1AD]' :link.href !== currentPath,
                            'hover:text-[#accae9] transition-colors text-xl' : true,
                        })}
                            href={link.href}>
                                {link.label}
                        </Link>
                    </div>
                )
            }
        </ul>
        {/* Mobile Screens Navigation */}
        <div className={
            isMenuOpen
            ? "fixed h-screen top-0 left-0 w-[65%] bg-[#5B738B] block md:hidden p-4 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
            <div className="w-full items-center flex justify-end mb-6">
                <div onClick={handleMenu}>
                <FaTimes size={30} />
                </div>
            </div>

            <div>
                <ul className="flex-col">
                    {
                        links.map(link => 
                            <div key={link.href} className="sm:flex lg:flex py-2">
                                <Link
                                key={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={classNames({
                                    'text-[#dddd6e]' :link.href === currentPath,
                                    'text-[#D1D1AD]' :link.href !== currentPath,
                                    'hover:text-[#accae9] transition-colors text-xl' : true,
                                })}
                                    href={link.href}>
                                        {link.label}
                                </Link>
                            </div>
                        )
                    }

                </ul>
           </div>
        </div>
      
    </nav>
   
  )
}

export default NavigationBar