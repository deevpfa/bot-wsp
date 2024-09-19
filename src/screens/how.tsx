
import { CheckCircleIcon } from "@/components/icons/check-circle-icon";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface HowProps { }

export function How({ }: HowProps) {
    return (
        <section className="overflow-hidden relative py-16">
            {/* <div className="absolute overflow-hidden top-0 left-0 shape-svg w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path className="shape-fill-dark" d="M0,6V0h1000v100L0,6z" /></svg></div> */}
            <div className="container px-4 mx-auto py-16">
                <div className="flex flex-col-reverse lg:flex-row flex-wrap -mx-4 justify-between">
                    <div className="w-full px-4 md:w-6/12">
                        <div className="relative max-w-xl">
                            <Player src="/images/lottieComputer2.json" speed={1} autoplay loop />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:mb-0 md:w-1/2 md:pt-10 mb-10">
                        <div className="">
                            <span className="inline-block  mb-4 text-xs leading-5 uppercase rounded-full shadow-sm bg-primary-600 text-white px-3 py-1 font-bold">Cómo Funciona</span>
                            <h2 className="mb-8 text-4xl font-heading font-bold text-white leading-15">Estas a un paso de automatizar tu empresa</h2>
                            <ul className="mb-8 pl-5">
                                <li className="flex items-center mb-4">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" />
                                    <span className="text-lg md:text-xl font-heading text-white">Automatización 24/7.</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" /><span className="text-lg md:text-xl font-heading text-white">Respuestas Rápidas y Personalizadas.</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" /><span className="text-lg md:text-xl font-heading text-white">Reducción de Costos.</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" /><span className="text-lg md:text-xl font-heading text-white">Uso Eficiente de WhatsApp.</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" /><span className="text-lg md:text-xl font-heading text-white">Seguridad y Privacidad.</span>
                                </li>
                                <li className="flex items-center mb-4">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" /><span className="text-lg md:text-xl font-heading text-white">Plataforma simple, rápida e intuitiva.</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircleIcon className="text-2xl text-lime-300 mr-2" /><span className="text-lg md:text-xl font-heading text-white">Precios Transparentes.</span>
                                </li>
                            </ul></div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4 mt-16">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-full px-8 pt-14 pb-8 rounded-md shadow-md bg-white bg-opacity-10">
                            <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary-500">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-xl bg-primary-600 text-white font-bold">1</div>
                            </div>
                            <h3 className="mb-4 text-lg md:text-xl text-white font-bold text-center">Comunicate con nosotros</h3>
                            <p className="font-medium text-white text-center">Agenda una reunión con nuestro equipo de ventas para poder asesorarte en la mejor solución para tu empresa.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-16 md:mt-0">
                        <div className="relative h-full px-8 pt-14 pb-8 rounded-md shadow-md bg-white bg-opacity-10">
                            <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary-500">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-xl bg-primary-600 text-white font-bold">2</div>
                            </div>
                            <h3 className="mb-4 text-lg md:text-xl text-white font-bold text-center">Implementación</h3>
                            <p className="font-medium text-white text-center">Una vez que hayas decidido trabajar con nosotros, nuestro equipo técnico se encargará de implementar la solución en tu empresa.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-16 md:mt-0">
                        <div className="relative h-full px-8 pt-14 pb-8 rounded-md shadow-md bg-white bg-opacity-10">
                            <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary-500">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-xl bg-primary-600 text-white font-bold">3</div>
                            </div>
                            <h3 className="mb-4 text-lg md:text-xl text-white font-bold text-center">¡Listo!</h3>
                            <p className="font-medium text-white text-center">Empeza a disfrutar de la Automatización.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}