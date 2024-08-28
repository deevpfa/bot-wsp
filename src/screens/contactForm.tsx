import { BackgroundBeams } from "@/components/BgBeams";
import { Meteors } from "@/components/Meteors";
import { motion } from "framer-motion";
import React from "react";

interface ContactFormProps { }

export function ContactForm({ }: ContactFormProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeInOut",
            }}
            exit={{ opacity: 1, y: 0 }}
            id="form" className="relative"
        >
            <div className="mx-auto">
                <div className="flex flex-wrap ">
                    <div
                        className="w-full md:w-1/2 lg:p-8">
                        <div className="pt-18 ">
                            <h2 className="mb-9 font-heading  text-4xl md:text-4xl font-bold text-white">Déjanos tus datos y empieza a automatizar tus conversaciones.</h2>
                            <p className="text-2xl text-white font-light leading-normal ">Uno de nuestros asesores se comunicara contigo a la brevedad!</p>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-1/2 px-2 lg:px-12">

                        <form action="#" className="relative px-8 md:px-16 shadow-xl    2xl:px-8 py-12 max-w-2xl mx-auto bg-white bg-opacity-5 w-full rounded-3xl">
                            <div className="flex flex-wrap -m-2.5 mb-4">
                                <div className="w-full md:w-1/2 p-2.5">
                                    <label htmlFor="contact-input-01-1" className="mb-2 inline-block text-sm text-white font-medium">Nombre</label>
                                    <input id="contact-input-01-1" type="text" placeholder="Nombre" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-white outline-none focus:border-white border border-white focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                                </div>
                                <div className="w-full md:w-1/2 p-2.5">
                                    <label htmlFor="contact-input-01-2" className="mb-2 inline-block text-sm text-white font-medium">Empresa</label>
                                    <input id="contact-input-01-2" type="text" placeholder="Empresa" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-white outline-none focus:border-white border border-white focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -m-3 mb-11">
                                <div className="w-full p-3">
                                    <label htmlFor="contact-input-01-3" className="mb-2 inline-block text-sm text-white font-medium">Email</label>
                                    <input id="contact-input-01-3" type="text" placeholder="Email" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-white outline-none focus:border-white border border-white focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                                </div>
                                <div className="w-full p-3">
                                    <label htmlFor="contact-textarea-01-1" className="mb-2 inline-block text-sm text-white font-medium">Mensaje</label>
                                    <textarea id="contact-textarea-01-1" placeholder="Mensaje" className="w-full bg-transparent p-6 h-28 overflow-hidden font-semibold text-white placeholder-white outline-none focus:border-white border border-white focus:ring focus:ring-blue-200 rounded-3xl resize-none transition duration-200" defaultValue={""} />
                                </div>
                            </div>
                            <button type="submit" className="inline-flex justify-center items-center text-center h-14 py-6 px-10 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <img className="absolute inset-0 w-full h-full object-cover select-none" src="fily-assets/gradients/gradient-contact.jpg" alt="" /> */}
        </motion.div>
    );
}