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
    <nav className="flex fixed shadow w-full md:static justify-between md:px-28 px-2 py-4 border-b items-center top-0 bg-black-100 z-10">
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
                <span className="text-[#253448] text-3xl mx-2">Gift.</span>
            </div>
            {/* Mobile hanbarger menu */}
            <div onClick={handleMenu} 
            className="block md:hidden"
            >
                <FaBars size={30}/>
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
                            'text-zinc-900' :link.href === currentPath,
                            'text-zinc-500' :link.href !== currentPath,
                            'hover:text-zinc-800 transition-colors' : true,
                        })}
                            href={link.href}>
                                {link.label}
                        </Link>
                    </div>
                )
            }
        </ul>
    </nav>
   
  )
}

export default NavigationBar