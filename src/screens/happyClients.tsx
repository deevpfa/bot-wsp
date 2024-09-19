import { InfiniteMovingCards } from "@/components/InfinitiMoving";
import { motion } from "framer-motion";
import React from "react";
import san from '../../public/images/smt.png'
import hi from '../../public/images/hi.png'
import vmh from '../../public/images/vmh.png'
import Image from 'next/image'
import langchaing from '../../public/images/langchain.svg'

const testimonials = [
    {
        name: "Club Atlético San Martin",
        image: san,
        quote: "Demesc nos permitio automatizar el registro de subscripciones de nuestros clientes, mejorando la experiencia de usuario y reduciendo el tiempo de respuesta."
    },
    {
        name: "Hospital Italiano",
        image: hi,
        quote: "Demesc nos permitio automatizar el agendamiento de citas para conectarla con nuestra API de turnos, reduciendo el tiempo de espera de nuestros pacientes."
    },
    {
        name: "Vaca Muerta Housing",
        image: vmh,
        quote: "Demesc nos permitio realizar un seguimiento de nuestros procesos dentro de los complejos habitacionales."
    },

];

interface HappyClientsProps { }

export function HappyClients({ }: HappyClientsProps) {
    return (
        <>
            <div className='py-16'>
                <div className='flex justify-center items-center'>
                    <div className="w-full lg:w-1/2 px-4 ">
                        <div className="md:max-w-lg">
                            <span className="inline-block  mb-4 text-xs leading-5 uppercase rounded-full shadow-sm bg-primary-600 text-white px-3 py-1 font-bold">Clientes Felices</span>
                            <h3 className="lg:mb-8 text-4xl text-white font-bold tracking-tighter">La satisfacción
                                de nuestros clientes es nuestra prioridad</h3></div>
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="mt-24 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        pauseOnHover={false}
                        items={testimonials}
                        direction="left"
                        speed="normal"
                    />
                    <InfiniteMovingCards
                        pauseOnHover={false}
                        items={testimonials}
                        direction="right"
                        speed="normal"
                    />
                </motion.div>
            </div>
            <section className="lg:py-20  relative ">
                {/* <div className="absolute overflow-hidden top-0 left-0 shape-svg w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path className="shape-fill-blue" d="M0,6V0h1000v100L0,6z" /></svg></div> */}
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-10">
                            <div className="md:max-w-lg">
                                <span className="inline-block  mb-4 text-xs leading-5 uppercase rounded-full shadow-sm bg-primary-600 text-white px-3 py-1 font-bold">data partners</span>
                                <h3 className="mb-8 text-4xl text-white font-bold tracking-tighter">Potenciá el conocimiento de tus clientes con inteligencia artificial</h3>
                                <p className="text-lg md:text-xl font-medium text-coolGray-300">Nuestra herramienta permite extraer y analizar en tiempo real información desde distintas fuentes para elaborar los reportes más completos del mercado potenciados con inteligencia artificial.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="flex flex-wrap justify-center -mx-4">
                                <div className="w-full md:w-1/2 px-4 mb-8">
                                    <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md shadow-md bg-white bg-opacity-10">
                                        <Image className="mx-auto" width={1000} height={1000} src="https://static.shuffle.dev/uploads/files/43/43b7221b940768b23ad07c53c61d0d7e3795bf2d/openai-logo-grey.svg" alt="" /></div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                                    <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md shadow-md bg-white bg-opacity-10">
                                        <Image className="mx-auto" width={1000} height={1000} src={langchaing} alt="" /></div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8 lg:mb-0">
                                    <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md shadow-md bg-white bg-opacity-10">
                                        <Image className="mx-auto" width={1000} height={1000} src="https://static.shuffle.dev/uploads/files/43/43b7221b940768b23ad07c53c61d0d7e3795bf2d/mp-logo-grey.svg" alt="" /></div>
                                </div>
                                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                                    <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md shadow-md bg-white bg-opacity-10">
                                        <Image className="mx-auto" width={1000} height={1000} src="https://static.shuffle.dev/uploads/files/43/43b7221b940768b23ad07c53c61d0d7e3795bf2d/aws-sm-logo-grey.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}