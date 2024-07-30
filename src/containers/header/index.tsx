import React from "react";
import Image from 'next/image'
import logo from '../../../public/images/LogoSinFondo.png'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface IndexProps { }

export function Header({ }: IndexProps) {
    const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false);
    const handleOpenHamburger = (status: boolean) => {
        setIsHamburgerOpen(status);
        document.body.style.overflow = !status ? 'auto' : 'hidden';
    }
    return (
        <>
            {
                isHamburgerOpen && (
                    <motion.div
                        initial={{ opacity: 0.5, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeIn",
                        }}
                        className="fixed w-full top-0 text-white flex justify-center z-[200] bg-black h-screen">
                        <XMarkIcon onClick={() => handleOpenHamburger(false)} className="h-9 w-9  text-white absolute top-10 right-12" />
                        <div className="flex gap-8 justify-center flex-col items-center  text-4xl ">
                            <a href="#benefits" onClick={() => handleOpenHamburger(false)}>Beneficios</a>
                            <a>Nosotros</a>
                            {/* <a href="#form" onClick={() => handleOpenHamburger(false)}>Contactanos</a> */}
                        </div>
                    </motion.div>
                )}
            <nav
                className="relative z-10  py-5"
            >
                <div className="flex items-center  justify-between">
                    <a className="relative z-10 pr-4 -mt-2 max-h-24 lg:pr-0" href="#">
                        <Image src={logo} alt="logo" width={500} height={500} className='h-32 w-32' />
                    </a >
                    <div className="hidden md:flex items-center gap-12 text-white">
                        <a href="#benefits" onClick={() => handleOpenHamburger(false)}>Beneficios</a>
                        <a>Nosotros</a>
                        {/* <a className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 transition duration-200" href="#">Login</a> */}
                        {/* <a className="md:inline-flex justify-center hidden items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#form">Contactanos</a> */}
                    </div>
                    <div className="md:hidden flex pr-8 items-center">
                        <Bars3Icon onClick={() => handleOpenHamburger(true)} className="h-9 w-9 text-white" />
                    </div>
                    {/* <a className="inline-flex md:hidden justify-center items-center text-center p-3 text-xs font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#form">Contactanos</a> */}
                </div >
            </nav>
        </>
    );
}