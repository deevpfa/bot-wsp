import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/IsoSinFondo.png'
import telefono1 from '../../public/images/imagenTest.png'
import robot from '../../public/images/robot.png'
import { motion } from 'framer-motion'
import { ThreeDCardContainer } from '@/components/3DCard'
import { FlipWords } from '@/components/FlipWord'
import { InfiniteMovingCards } from '@/components/InfinitiMoving'
import san from '../../public/images/smt.png'
import hi from '../../public/images/hi.png'
import vmh from '../../public/images/vmh.png'
import { Header } from '@/containers/header'
import { StickyScroll } from '@/components/StickyScrollC'
import { StickyScrollRevealDemo } from '@/components/StickyScroll'
import { FeaturesSectionDemo } from '@/components/Feature'


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

export default function Home() {

  return (
    <div className='relative bg-black'>
      <section className="relative bg-blue  pb-24  xl:pb-32 overflow-hidden">
        <Header />
        <div className="container mx-auto px-4">
          <div className="relative z-10  md:py-12 lg:py-0 md:pb-36">
            <div className="flex flex-wrap  items-center">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap justify-center">
                  <ThreeDCardContainer>

                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeInOut",
                      }}

                      className="relative w-auto p-5 lg:p-0 "
                    >

                      <Image className=" transform  z-40 lg:hover:scale-105 transition duration-500 w-auto h-[320px] sm:h-[420px] md:h-[680px]  " width={500} height={600} src={robot} alt="" />
                    </motion.div>
                  </ThreeDCardContainer>
                  {/* <Image className="hidden lg:block absolute top-0 lg:left-24 xl:left-40 object-cover transform hover:scale-105 transition duration-500" width={500} height={600} style={{ height: 630 }} src={telefono1} alt="" /> */}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-full lg:w-1/2 px-8 py-4 lg:p-8"
              >
                <div className="md:max-w-3xl">
                  {/* <div className="flex flex-wrap items-center -m-2 mb-10">
                    <div className="w-auto p-2">
                      <div className="flex flex-wrap">
                        <div className="w-auto">
                          <img className="h-10" src="fily-assets/headers/avatar.png" alt="" />
                        </div>
                        <div className="w-auto -ml-2">
                          <img className="h-10" src="fily-assets/headers/avatar2.png" alt="" />
                        </div>
                        <div className="w-auto -ml-2">
                          <img className="h-10" src="fily-assets/headers/avatar3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-2">
                      <span className="text-sm font-medium text-white">340k+ users</span>
                    </div>
                  </div> */}
                  <h1 className="mb-12 font-heading text-4xl md:text-6xl xl:text-6xl text-white font-bold"><span className="bg-gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automatizá tu </span> <span><FlipWords words={['Negocio', 'E-Commerce', 'Emprendimiento']} />de forma eficiente con nuestros ChatBots.</span></h1>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <img className="absolute inset-0 w-full h-full object-cover select-none" src="fily-assets/gradients/gradient-header4.png" alt="" /> */}

      </section >


      {/* Testimonios */}
      <section>
        <div className='flex justify-center items-center mt-12'>
          <h1 className='text-white text-4xl font-semibold tracking-wider'>Clientes Felices</h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
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
      </section>


      <div className='bg-green'>
        {/* BENEFICIOS */}
        <section className='py-12 md:py-24' id='benefits'>
          <div className='flex justify-center items-center'>
            <h1 className='text-white text-4xl font-semibold tracking-wider'>Beneficios</h1>
          </div>
          <FeaturesSectionDemo />
        </section>







        {/* Formulario */}
        <section id="form" className="z-20  relative md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div
                // initial={{ opacity: 0, x: -40 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{
                //   delay: 0.2,
                //   duration: 0.8,
                //   ease: "easeInOut",
                // }}
                className="w-full md:w-1/2 lg:p-8">
                <div className="pt-18">
                  <h2 className="mb-9 font-heading text-4xl md:text-4xl font-bold text-white">Déjanos tus datos y empieza a automatizar tus conversaciones.</h2>
                  <p className="text-2xl text-white font-light leading-normal">Uno de nuestros asesores se comunicara contigo a la brevedad!</p>
                </div>
              </div>
              <div
                // initial={{ opacity: 0, x: 40 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{
                //   delay: 0.2,
                //   duration: 0.8,
                //   ease: "easeInOut",
                // }}
                className="w-full md:w-1/2 pt-12 md:pt-0 lg:p-8">

                <form action="#" className=" px-8 md:px-16 xl:px-8 py-12 max-w-2xl mx-auto bg-white bg-opacity-5 w-full rounded-3xl">
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
                    {/* <div className="w-full p-3">
                      <label htmlFor="contact-input-01-4" className="mb-2 inline-block text-sm text-white font-medium"></label>
                      <input id="contact-input-01-4" type="text" placeholder="Type here" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-white outline-none focus:border-white border border-white focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                    </div> */}
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
        </section>

      </div>
    </div >
  )
}


