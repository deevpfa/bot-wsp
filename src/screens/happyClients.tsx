import { InfiniteMovingCards } from "@/components/InfinitiMoving";
import { motion } from "framer-motion";
import React from "react";
import san from '../../public/images/smt.png'
import hi from '../../public/images/hi.png'
import vmh from '../../public/images/vmh.png'

const testimonials = [
    {
        name: "San Martin",
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
        <div className=''>
            <div className='flex justify-center items-center'>
                <h1 className='text-white text-4xl font-semibold tracking-wider'>Clientes Felices</h1>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    pauseOnHover={false}
                    items={testimonials}
                    direction="left"
                    speed="normal"
                />
            </motion.div>
        </div>
    );
}