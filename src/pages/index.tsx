import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/IsoSinFondo.png'
import telefono1 from '../../public/images/imagenTest.png'
import robot from '../../public/images/robot.png'
const links: any[] = [

]

export default function Home() {

  return (
    <div className='bg-black'>
      <section className="relative bg-black overflow-hidden">
        <nav className="relative z-10 px-12 py-5">
          <div className="flex items-center justify-between">
            <a className="relative z-10 pr-4 lg:pr-0" href="#">
              <Image src={logo} alt="logo" width={500} height={500} className='h-9 w-9' />
            </a>
            <ul className="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-14">
              {links.map((link, index) => (
                <li>
                  <a href={link.href} className="text-lg text-white hover:text-gray-300 font-medium transition duration-200">{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="hidden xl:flex items-center gap-2">
              <a className="hidden 2xl:block mr-8" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#clip0_231_6677)">
                    <path d="M19.6343 17.871L15.7634 13.9984C18.6598 10.1278 17.87 4.64195 13.9994 1.74551C10.1288 -1.15092 4.64292 -0.361157 1.74649 3.50949C-1.14994 7.38013 -0.36018 12.866 3.51046 15.7624C6.61969 18.0891 10.8901 18.0891 13.9994 15.7624L17.872 19.635C18.3587 20.1216 19.1477 20.1216 19.6343 19.635C20.121 19.1483 20.121 18.3593 19.6343 17.8727L19.6343 17.871ZM8.7872 15.015C5.34716 15.015 2.55848 12.2263 2.55848 8.78623C2.55848 5.34618 5.34716 2.55751 8.7872 2.55751C12.2273 2.55751 15.0159 5.34618 15.0159 8.78623C15.0123 12.2247 12.2257 15.0113 8.7872 15.015Z" fill="#19191B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_231_6677">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* <a className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 transition duration-200" href="#">Login</a> */}
              <a className="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#form">Contactanos</a>
            </div>
            <a className="flex items-center justify-center h-12 p-5 text-white border border-gray-300 xl:hidden rounded-full" href="#">
              <svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.75 6.75003H1.25C0.559648 6.75003 0 7.30968 0 8.00003C0 8.69038 0.559648 9.25003 1.25 9.25003H18.75C19.4404 9.25003 20 8.69038 20 8.00003C20 7.30968 19.4404 6.75003 18.75 6.75003Z" fill="currentColor" />
                <path d="M1.25 3.41669H18.75C19.4404 3.41669 20 2.85704 20 2.16669C20 1.47634 19.4404 0.916687 18.75 0.916687H1.25C0.559648 0.916687 0 1.47634 0 2.16669C0 2.85704 0.559648 3.41669 1.25 3.41669Z" fill="currentColor" />
                <path d="M18.75 12.5834H1.25C0.559648 12.5834 0 13.143 0 13.8334C0 14.5237 0.559648 15.0834 1.25 15.0834H18.75C19.4404 15.0834 20 14.5237 20 13.8334C20 13.143 19.4404 12.5834 18.75 12.5834Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </nav>

        <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
          <div className="fixed inset-0 bg-black opacity-20" />
          <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-8">
                <a className="pr-4" href="#">
                  <img className="h-8" src="fily-assets/logos/fily-treck-black-logo.svg" alt="" />
                </a>
                <a href="#">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#252E4A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <ul className="flex flex-col gap-8 py-16">
                <li>
                  <a href="#" className="text-lg text-black hover:text-gray-700 font-medium transition duration-200">Our features</a>
                </li>
                <li>
                  <a href="#" className="text-lg text-black hover:text-gray-700 font-medium transition duration-200">How to use?</a>
                </li>
                <li>
                  <a href="#" className="inline-flex items-center text-lg text-black hover:text-gray-700 font-medium transition duration-200">
                    <span className="mr-2.5">Use cases</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                      <g>
                        <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={12} height={12} fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg text-black hover:text-gray-700 font-medium transition duration-200">Plans &amp; pricing</a>
                </li>
              </ul>
              <div className="flex flex-col items-center gap-2">
                {/* <a className="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-black hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-100 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200" href="#">Login</a> */}
                <a className="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#form">Contactanos</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="container mx-auto px-4">
          <div className="relative z-10 py-12 lg:py-0 md:pb-36">
            <div className="flex flex-wrap items-center -m-8">
              <div className="w-full md:w-1/2">
                <div className="flex flex-wrap justify-center">
                  <div className="relative w-auto">
                    <Image className="lg:mt-9  transform  z-40 hover:scale-105 transition duration-500" width={500} height={600} style={{ height: 720, width: 720 }} src={robot} alt="" />
                    {/* <Image className="hidden lg:block absolute top-0 lg:left-24 xl:left-40 object-cover transform hover:scale-105 transition duration-500" width={500} height={600} style={{ height: 630 }} src={telefono1} alt="" /> */}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div className="md:max-w-3xl">
                  <div className="flex flex-wrap items-center -m-2 mb-10">
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
                  </div>
                  <h1 className="mb-12 font-heading text-4xl md:text-6xl xl:text-6xl text-white font-bold"><span className="bg-gradient-text" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automatizá tu negocio</span> <span> de forma eficiente con nuestros ChatBots</span></h1>

                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute inset-0 w-full h-full object-cover select-none" src="fily-assets/gradients/gradient-header4.png" alt="" />
      </section>



      {/* Formulario */}
      <div className='background-image'>
        <section id="form" className="py-12 z-20 relative md:py-24 content">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="pt-18">
                  <h2 className="mb-9 font-heading text-4xl md:text-4xl font-bold text-white">Déjanos tus datos y empieza a automatizar tus conversaciones.</h2>
                  <p className="text-2xl text-white font-light leading-normal">Uno de nuestros asesores se comunicara contigo a la brevedad!</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <form action="#" className="pb-28 px-16 max-w-2xl mx-auto bg-white bg-opacity-5 w-full rounded-3xl">
                  <div className="flex flex-wrap -m-2.5 mb-4">
                    <div className="w-full md:w-1/2 p-2.5">
                      <label htmlFor="contact-input-01-1" className="mb-2 inline-block text-sm text-gray-500 font-medium">Nombre</label>
                      <input id="contact-input-01-1" type="text" placeholder="Nombre" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-gray-500 outline-none focus:border-white border border-gray-500 focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                    </div>
                    <div className="w-full md:w-1/2 p-2.5">
                      <label htmlFor="contact-input-01-2" className="mb-2 inline-block text-sm text-gray-500 font-medium">Empresa</label>
                      <input id="contact-input-01-2" type="text" placeholder="Empresa" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-gray-500 outline-none focus:border-white border border-gray-500 focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -m-3 mb-11">
                    <div className="w-full p-3">
                      <label htmlFor="contact-input-01-3" className="mb-2 inline-block text-sm text-gray-500 font-medium">Email</label>
                      <input id="contact-input-01-3" type="text" placeholder="Email" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-gray-500 outline-none focus:border-white border border-gray-500 focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                    </div>
                    {/* <div className="w-full p-3">
                      <label htmlFor="contact-input-01-4" className="mb-2 inline-block text-sm text-gray-500 font-medium"></label>
                      <input id="contact-input-01-4" type="text" placeholder="Type here" className="w-full bg-transparent px-6 h-14 font-semibold text-white placeholder-gray-500 outline-none focus:border-white border border-gray-500 focus:ring focus:ring-blue-200 rounded-full transition duration-200" />
                    </div> */}
                    <div className="w-full p-3">
                      <label htmlFor="contact-textarea-01-1" className="mb-2 inline-block text-sm text-gray-500 font-medium">Mensaje</label>
                      <textarea id="contact-textarea-01-1" placeholder="Mensaje" className="w-full bg-transparent p-6 h-28 overflow-hidden font-semibold text-white placeholder-gray-500 outline-none focus:border-white border border-gray-500 focus:ring focus:ring-blue-200 rounded-3xl resize-none transition duration-200" defaultValue={""} />
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


      {/* Testimonios */}
      {/* <>
        <section className="py-24 md:py-36  overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="mb-24 font-heading text-4xl md:text-5xl font-bold text-white">What others say about us</h2>
            <div className="flex transition-transform duration-500 ease-in-out -m-5 mb-14">
              <div className="flex-shrink-0 max-w-xl w-full p-5">
                <div className="relative py-18 px-14 bg-white bg-opacity-5 rounded-3xl">
                  <div className="mb-12 p-2.5 pr-5 max-w-max rounded-5xl">
                    <div className="flex flex-wrap items-center -m-2.5">
                      <div className="w-auto p-2.5">
                        <img className="h-16" src="fily-assets/testimonials/avatar.png" alt="" />
                      </div>
                      <div className="flex-1 p-2.5">
                        <h3 className="font-heading text-2xl font-bold text-white">Aleeza Keller</h3>
                        <span className="text-sm text-blue-500 font-medium">CEO, Founder</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-light text-gray-500 leading-normal">Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor. Morbi ac faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Aenean in orci tempor nunc.</p>
                </div>
              </div>
              <div className="flex-shrink-0 max-w-xl w-full p-5">
                <div className="relative py-18 px-14 bg-white bg-opacity-5 rounded-3xl">
                  <div className="mb-12 p-2.5 pr-5 max-w-max rounded-5xl">
                    <div className="flex flex-wrap items-center -m-2.5">
                      <div className="w-auto p-2.5">
                        <img className="h-16 rounded-full" src="fily-assets/testimonials/pic2.jpg" alt="" />
                      </div>
                      <div className="flex-1 p-2.5">
                        <h3 className="font-heading text-2xl font-bold text-white">Stephen Leblanc</h3>
                        <span className="text-sm text-blue-500 font-medium">CEO, Founder</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-500 font-light leading-normal">Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor. Morbi ac faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Aenean in orci tempor nunc.</p>
                </div>
              </div>
              <div className="flex-shrink-0 max-w-xl w-full p-5">
                <div className="relative py-18 px-14 bg-white bg-opacity-5 rounded-3xl">
                  <div className="mb-12 p-2.5 pr-5 max-w-max rounded-5xl">
                    <div className="flex flex-wrap items-center -m-2.5">
                      <div className="w-auto p-2.5">
                        <img className="h-16 rounded-full" src="fily-assets/testimonials/pic.jpg" alt="" />
                      </div>
                      <div className="flex-1 p-2.5">
                        <h3 className="font-heading text-2xl font-bold text-white">Natasha Adams</h3>
                        <span className="text-sm text-blue-500 font-medium">CEO, Founder</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-500 font-light leading-normal">Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor. Morbi ac faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Aenean in orci tempor nunc.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -m-7">
              <div className="w-full md:flex-1 p-7">
                <div className="relative bg-white bg-opacity-10 overflow-hidden rounded-full" style={{ height: 3 }}>
                  <div className="absolute top-0 left-0 h-full bg-blue-500" />
                </div>
              </div>
              <div className="w-full md:w-auto p-7">
                <div className="flex flex-wrap justify-center md:justify-end">
                  <div className="w-auto p-2">
                    <a href="#" className="flex items-center justify-center w-14 h-14 text-gray-500 hover:text-white focus:text-white bg-white bg-opacity-10 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-200 rounded-full transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M7.31536 13.7141C7.40574 13.6211 7.47747 13.5105 7.52643 13.3886C7.57538 13.2667 7.60059 13.1359 7.60059 13.0039C7.60059 12.8718 7.57538 12.7411 7.52643 12.6192C7.47747 12.4973 7.40574 12.3867 7.31536 12.2937L4.14286 9.00276L13.7857 9.00276C14.0415 9.00276 14.2867 8.89738 14.4676 8.70979C14.6484 8.5222 14.75 8.26777 14.75 8.00248C14.75 7.73719 14.6484 7.48277 14.4676 7.29518C14.2867 7.10759 14.0415 7.0022 13.7857 7.0022L4.14286 7.0022L7.31536 3.71127C7.40574 3.61828 7.47747 3.50765 7.52643 3.38576C7.57539 3.26387 7.60059 3.13312 7.60059 3.00107C7.60059 2.86903 7.57539 2.73828 7.52643 2.61639C7.47747 2.4945 7.40574 2.38386 7.31536 2.29087C7.13469 2.10457 6.89029 2 6.63553 2C6.38078 2 6.13638 2.10457 5.95571 2.29087L1.81893 6.59209C1.45675 6.96554 1.25215 7.47276 1.25 8.00248C1.25469 8.52874 1.4591 9.03187 1.81893 9.40288L5.95571 13.7041C6.13511 13.8917 6.37879 13.9981 6.63355 14C6.8883 14.0018 7.13341 13.8991 7.31536 13.7141Z" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a href="#" className="flex items-center justify-center w-14 h-14 text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-blue-200 rounded-full transition duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M8.68464 2.28591C8.59426 2.3789 8.52253 2.48953 8.47357 2.61142C8.42461 2.73332 8.39941 2.86406 8.39941 2.99611C8.39941 3.12816 8.42461 3.2589 8.47357 3.38079C8.52253 3.50269 8.59426 3.61332 8.68464 3.70631L11.8571 6.99723L2.21429 6.99724C1.95854 6.99724 1.71327 7.10262 1.53243 7.29021C1.35159 7.4778 1.25 7.73223 1.25 7.99752C1.25 8.26281 1.35159 8.51723 1.53243 8.70482C1.71327 8.89241 1.95854 8.9978 2.21429 8.9978L11.8571 8.9978L8.68464 12.2887C8.59426 12.3817 8.52253 12.4923 8.47357 12.6142C8.42461 12.7361 8.39941 12.8669 8.39941 12.9989C8.39941 13.131 8.42461 13.2617 8.47357 13.3836C8.52253 13.5055 8.59426 13.6161 8.68464 13.7091C8.86531 13.8954 9.10971 14 9.36447 14C9.61922 14 9.86362 13.8954 10.0443 13.7091L14.1811 9.40791C14.5432 9.03446 14.7478 8.52724 14.75 7.99752C14.7453 7.47126 14.5409 6.96812 14.1811 6.59712L10.0443 2.29591C9.86489 2.10827 9.62121 2.0019 9.36645 2.00002C9.1117 1.99815 8.86659 2.10093 8.68464 2.28591Z" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </> */}
    </div>
  )
}


