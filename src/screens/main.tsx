import { ThreeDCardContainer } from "@/components/3DCard";
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image'
import robot from '../../public/images/robot.png'
import { FlipWords } from "@/components/FlipWord";

interface MainProps { }

export function Main({ }: MainProps) {
    return (
        <div className="relative">
            <div className="flex flex-wrap flex-col-reverse md:flex-row items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-wrap justify-center">
                        <ThreeDCardContainer>

                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="relative w-auto "
                            >

                                <Image className=" transform  z-40 lg:hover:scale-105 transition duration-500 w-auto h-[320px] sm:h-[420px] md:h-[580px]  " width={500} height={600} src={robot} alt="" />
                            </motion.div>
                        </ThreeDCardContainer>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="w-full lg:w-1/2 px-8 py-4 lg:p-8"
                >
                    <div className="md:max-w-3xl">

                        <h1 className="font-heading text-4xl md:text-6xl xl:text-6xl text-white font-bold"><span className="bg-gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automatizá tu </span> <span><FlipWords words={['Negocio', 'E-Commerce', 'Emprendimiento']} />de forma eficiente con nuestros ChatBots.</span></h1>

                    </div>
                </motion.div>
            </div>
            {/* <img className="absolute inset-0 w-full h-full object-cover select-none" src="fily-assets/gradients/gradient-header4.png" alt="" /> */}
        </div>

    );
}