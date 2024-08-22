import { ThreeDCardContainer } from "@/components/3DCard";
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image'
import robot from '../../public/images/robot1.svg'
// import robot from '../../public/images/robot.png'
import ring from '../../public/images/ring.svg'
import { FlipWords } from "@/components/FlipWord";
import Button from "@/components/MyButton";

interface MainProps { }

export function Main({ }: MainProps) {
    return (
        <div className="relative">
            <div className="flex flex-wrap  md:flex-row  items-center">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="w-full lg:w-1/2 p-8 pt-16 pb-32 lg:p-8"
                >
                    <div className="lg:max-w-3xl">

                        <h1 className="font-heading text-5xl lg:text-7xl text-white font-bold"><span className="bg-gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automatizá tu </span> <span><FlipWords words={['Negocio', 'E-Commerce', 'App', 'CRM']} />de forma eficiente con nuestros ChatBots.</span></h1>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.9,
                                ease: "easeInOut",
                            }}
                        >
                            <Button className="mt-8" size="lg">Demesc Bot Chat</Button>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-wrap justify-center">
                        <ThreeDCardContainer>

                            {/* <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="relative w-auto "
                            > */}
                            {/* <iframe src="https://lottie.host/embed/14d6ed68-d144-4cc7-ab74-50a20986a33c/ohIQl11bwW.json"></iframe> */}
                            {/* <iframe src="https://lottie.host/embed/7bd36afb-c858-4746-99a1-dddfe39e4114/QvPILzRhR2.json" className="w-[400px] h-[400px]"></iframe> */}
                            <Image className=" transform  z-40 scale-105 transition duration-500 hidden lg:block w-auto h-[320px] sm:h-[500px] md:h-[600px]  " width={1200} height={1200} src={robot} alt="" />
                            {/* </motion.div> */}
                        </ThreeDCardContainer>
                    </div>
                </div>
            </div>
            {/* <img className="absolute inset-0 w-full h-full object-cover select-none" src="fily-assets/gradients/gradient-header4.png" alt="" /> */}
        </div>

    );
}