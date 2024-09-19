import { ThreeDCardContainer } from "@/components/3DCard";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from 'next/image'
import robot from '../../public/images/robot1.svg'
// import robot from '../../public/images/robot.png'
import ring from '../../public/images/ring.svg'
import { FlipWords } from "@/components/FlipWord";
import Button from "@/components/MyButton";
import { Bars3Icon, InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ActiveLink from "@/components/ActiveLink";
import { classNames } from "@/functions/classNames";

import logo from '../../public/images/LogoSinFondo.png'
import { Paths } from "@/constants/Paths";
import { Player } from "@lottiefiles/react-lottie-player";
interface MainProps { }

export function Main({ }: MainProps) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        // <div className="2xl:py-12 relative">
        //     <div className="flex flex-wrap  md:flex-row  items-center">
        //         <motion.div
        //             initial={{ opacity: 0, x: 100 }}
        //             animate={{ opacity: 1, x: 0 }}
        //             exit={{ opacity: 1, x: 0 }}
        //             transition={{
        //                 duration: 0.8,
        //                 ease: "easeInOut",
        //             }}
        //             className="w-full lg:w-1/2 p-8 pt-16 pb-32 lg:p-8"
        //         >
        //             <div className="lg:max-w-3xl 2xl:max-w-4xl">

        //                 <h1 className="font-heading text-5xl lg:text-7xl 2xl:text-8xl  text-white font-bold"><span className="bg-gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automatizá tu </span> <span><FlipWords words={['Negocio', 'E-Commerce', 'App', 'CRM']} />de forma eficiente con nuestros ChatBots.</span></h1>
        //                 <motion.div
        //                     initial={{ opacity: 0, x: 100 }}
        //                     animate={{ opacity: 1, x: 0 }}
        //                     exit={{ opacity: 1, x: 0 }}
        //                     transition={{
        //                         duration: 0.9,
        //                         ease: "easeInOut",
        //                     }}
        //                 >f
        //                     <Button className="mt-8" size="lg">Demesc Bot Chat</Button>
        //                 </motion.div>
        //             </div>
        //         </motion.div>
        //         <div className="w-full lg:w-1/2 hidden lg:block">
        //             <div className="flex flex-wrap  justify-center">
        //                 {/* <ThreeDCardContainer> */}

        //                 {/* <motion.div
        //                         initial={{ opacity: 0, x: -100 }}
        //                         animate={{ opacity: 1, x: 0 }}
        //                         exit={{ opacity: 1, x: 0 }}
        //                         transition={{
        //                             duration: 0.8,
        //                             ease: "easeInOut",
        //                         }}
        //                         className="relative w-auto "
        //                     > */}
        //                 {/* <iframe src="https://lottie.host/embed/14d6ed68-d144-4cc7-ab74-50a20986a33c/ohIQl11bwW.json" className="w-[600px] h-[500px]"></iframe> */}
        //                 <iframe src="https://lottie.host/embed/0441d013-d3c3-4f7f-b004-7b3976d71519/tGEMTWXgU8.json" className="2xl:w-[950] 2xl:h-[1100px] w-[680px] h-[800px] absolute -top-28 2xl:-top-32"></iframe>
        //                 {/* <iframe src="https://lottie.host/embed/7bd36afb-c858-4746-99a1-dddfe39e4114/QvPILzRhR2.json" className="w-[400px] h-[400px]"></iframe> */}
        //                 {/* <iframe src="https://lottie.host/embed/414aa858-e890-4534-a9a5-a87863046fe8/3GBwLkmJYZ.json" className="w-[600px] h-[500px]"></iframe> */}
        //                 {/* <Image className=" transform  z-40 scale-110 transition duration-500 hidden lg:block w-auto pt-16 h-[320px] sm:h-[500px] md:h-[600px]  " width={1200} height={1200} src={robot} alt="" /> */}
        //                 {/* </motion.div> */}
        //                 {/* </ThreeDCardContainer> */}
        //             </div>
        //         </div>
        //     </div>
        //     {/* <img className="absolute inset-0 w-full h-full object-cover select-none" src="fily-assets/gradients/gradient-header4.png" alt="" /> */}
        // </div>
        <section className="relative overflow-hidden lg:mb-32"><div className="">
            <div className="container mx-auto">
                <nav className="flex justify-between p-6 px-4 lg:border-b border-white border-opacity-10"><div className="flex justify-between items-center w-full">
                    <div className="w-1/2 md:w-1/3">
                        <Image className="h-24 w-24 scale-150" src={logo} width={500} height={500} alt="" />
                    </div>
                    {/* <div className="w-1/2 md:w-1/3">
                        <ul className="hidden sm:flex sm:justify-center"><li className="mr-12"><a className="font-medium text-white hover:text-gray-200" href="#">Servicios</a></li>
                            <li className="mr-12"><a className="font-medium text-white hover:text-gray-200" href="#">Precios</a></li>
                            <li className="mr-12"><a className="font-medium text-white hover:text-gray-200" href="#">Recursos</a></li>
                        </ul></div> */}
                    <div className="w-1/2 md:w-1/3">
                        <div className="hidden md:flex items-center justify-end">
                            {/* <ActiveLink className="inline-block py-2 px-4 mr-2 leading-5 bg-transparent rounded-md font-semibold text-white hover:text-gray-200" href={Paths.signin}>Ingresar</ActiveLink> */}
                            <ActiveLink className="inline-block leading-5 rounded-md text-white bg-primary-600 hover:bg-primary-700 px-5 font-semibold py-3.5" href='#contact'>Contactanos</ActiveLink>
                        </div>
                    </div>
                </div>
                    <Bars3Icon className="navbar-burger self-center md:hidden h-9 w-9 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                </nav>
                <div className={classNames("backdrop-blur-lg hidden fixed top-0 z-50 left-0 w-full h-full", mobileMenuOpen && 'block')}>
                    <div className="fixed top-0  left-0 bottom-0 w-full max-w-xs bg-white">
                        {/* BURGER MENU */}
                        <nav className="relative p-6 h-full overflow-y-auto">
                            <div className="flex flex-col items-center justify-between h-full">
                                <Image width={1000} height={1000} className="h-8" src={logo} alt="" />
                                <ul className="py-6"><li><a className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md" href="#">Servicios</a></li>
                                    <li><a className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md" href="#">Precios</a></li>
                                    <li><a className="block py-3 px-4 text-coolGray-400 hover:text-white font-medium hover:bg-coolGray-800 rounded-md" href="#">Recursos</a></li>
                                </ul><div className="flex flex-wrap">
                                    {/* <div className="w-full mb-2"><ActiveLink className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-400 hover:text-white bg-transparent font-medium text-center rounded-md" href={Paths.signin}>Ingresar</ActiveLink></div> */}
                                    <div className="w-full"><ActiveLink className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" href="#contact">Contactanos</ActiveLink></div>
                                </div>
                            </div>
                        </nav>
                        <a className="navbar-close absolute top-2 p-4 right-3" href="#">
                            <XMarkIcon className="h-6 w-6 text-coolGray-400" onClick={() => setMobileMenuOpen(false)} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
            <svg className="absolute inset-x-0 top-0 -z-10  w-full h-full stroke-white opacity-10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true"><defs><pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none" /></pattern></defs><rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" /></svg><div className="lg:py-12">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap md:items-center -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            {/* <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight">Inteligencia en datos para tu empresa</h1> */}
                            <h1 className="font-heading text-5xl leading-tight lg:text-7xl 2xl:text-8xl  text-white font-bold"><span className="bg-gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automatizá tu </span> <span><FlipWords words={['Negocio', 'E-Commerce', 'App', 'CRM']} />de forma eficiente con nuestros ChatBots.</span></h1>
                            {/* <p className="text-lg md:text-xl font-medium text-coolGray-300 mb-4">La plataforma con inteligencia artificial para la generación de informes y análisis de personas, empresas, vehículos y mucho más.</p>
                            <p className="mb-8 font-semibold text-lg">Registrate gratís y buscá los datos que tu negocio necesita hoy.</p> */}
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">

                                    <Button className="mt-8" size="lg">Demesc Bot Chat</Button>
                                    {/* <a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-center rounded-md shadow-sm text-white font-semibold bg-primary-600 hover:text-primary-700" href="#">Comenzar gratis →</a> */}
                                    {/* <div className="text-center flex justify-center items-center py-2">
                                        <InformationCircleIcon className="h-4 w-4 mr-1 text-white" />
                                        <p className="text-xs text-white">No se requiere tarjeta de crédito</p>
                                    </div> */}
                                </div>
                                <div className="w-full md:w-auto py-1 md:py-0" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="relative mx-auto md:mr-0 max-w-max">
                                <Player src="/images/lottieComputer.json" speed={1} autoplay loop />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}