import React from 'react'
import Image from 'next/image'
import globeUp from '../../public/images/globe-up.svg'
import globeDown from '../../public/images/globe-down.svg'
import { Header } from '@/containers/header'
import { Main } from '@/screens/main'
import { HappyClients } from '@/screens/happyClients'
import { Benefits } from '@/screens/benefits'
import { ContactForm } from '@/screens/contactForm'
import Footer from '@/containers/footer'
import Chat from '@/components/Chat'
import { WhatsappIcon } from '@/components/icons/whatsapp-icon'
import Us from '@/screens/us'





export default function Home() {
  const [chatOpen, setChatOpen] = React.useState(false);
  return (
    <div className='relative wavePatternBg bg-secondary-darken pb-12'>
      {/* <div className='relative bg-secondary-darken pb-12'> */}
      <Chat />

      <div className='md:px-16  flex flex-col gap-y-16'>
        <section className="relative  bg-cover lg:bg-contain overflow-hidden">
          <Header />
          <Main />
        </section >
        <Image alt='' className='w-screen -mt-12 lg:-mt-32' src={globeUp} width={500} height={600} />
        {/* BENEFICIOS */}
        <Benefits />
        {/* NOSOTROS */}
        <Us />
        {/* Clientes felices */}
        <HappyClients />
        <Image alt='' className='w-screen ' src={globeDown} width={500} height={600} />
        {/* Formulario */}
        {/* <ContactForm /> */}


        {/* Footer */}
        <Footer />
      </div>

    </div>
  )
}


