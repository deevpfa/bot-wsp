
// import { ContactBody } from "@/interfaces/api/contact.interface";
// import { Form, SelectField, Textarea, TextField, useForm, Validators } from "@/modules/form";
// import { contact } from "@/services";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Form, SelectField, TextField, useForm, Validators } from "@/modules/form";
import { Textarea } from "@/modules/form/components/textarea";

const variants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

interface ContactProps { }

export function Contact({ }: ContactProps) {
    const containerRef = useRef(null);
    const isView = useInView(containerRef, { once: true });

    const [isLoading, setIsLoading] = React.useState(false);

    const fContact = useForm<any>({
        firstName: { value: "", validators: [Validators.required] },
        lastName: { value: "", validators: [Validators.required] },
        email: { value: "", validators: [Validators.required, Validators.email] },
        message: { value: "", validators: [Validators.required] },
    });

    function handleSubmit() {
        if (fContact.isInvalid) return;
        // onLoading(async () => {
        //     try {
        //         await contact(fContact.values);
        //     } catch (error) {
        //         console.error("Error sending contact", error);
        //     }
        // });
    }

    return (
        <section ref={containerRef} className="mb-12" id="contact">
            <div className=''>
                <motion.div
                    initial='hidden'
                    animate={isView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.8 }}
                    className='overflow-hidden pb-72'
                >
                    <div className='container px-4 mx-auto'>
                        <div className='pb-10 max-w-3xl mx-auto text-center relative z-10'>
                            <h1 className='mb-4 text-3xl lg:text-5xl font-bold text-white'>Contacto</h1>
                            <p className='text-xl text-gray-200 mb-12'>
                                Dejanos tu consulta y nuestro equipo se comunicará a la brevedad.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial='hidden'
                animate={isView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='relative z-10'
            >
                <div className='container px-4 mx-auto'>
                    <div className='py-20 max-w-3xl mx-auto -mt-96'>
                        <Form group={fContact} onSubmit={handleSubmit}>
                            <div className='p-8 rounded-3xl border border-gray-100 bg-white max-w-xl mx-auto'>
                                <div className='flex flex-wrap -mx-4'>
                                    <TextField
                                        name='firstName'
                                        label='Nombre'
                                        placeholder='Nombre'
                                        className='w-full lg:w-1/2 px-4'
                                        hasFeedback
                                        errorTip={(error: any) => {
                                            if (!error) return null;
                                            if (error.required) return "El nombre es requerido";
                                        }}
                                    />
                                    <TextField
                                        name='lastName'
                                        label='Apellido'
                                        placeholder='Apellido'
                                        className='w-full lg:w-1/2 px-4'
                                        hasFeedback
                                        errorTip={(error: any) => {
                                            if (!error) return null;
                                            if (error.required) return "El apellido es requerido";
                                        }}
                                    />
                                </div>

                                <TextField
                                    name='email'
                                    label='Email'
                                    placeholder='john@email.com'
                                    hasFeedback
                                    errorTip={(error: any) => {
                                        if (!error) return null;
                                        if (error.required) return "El email es requerido";
                                        if (error.email) return "El email no es válido";
                                    }}
                                />

                                <Textarea
                                    name='message'
                                    label='Mensaje'
                                    placeholder='Ingresa tu mensaje'
                                    rows={5}
                                    hasFeedback
                                    infoTip='Por favor, facilítenos tantos detalles como sea posible.'
                                    errorTip={(error: any) => {
                                        if (!error) return null;
                                        if (error.required) return "El mensaje es requerido";
                                    }}
                                />

                                <button
                                    className='py-4 px-6 rounded-full w-full h-14 inline-flex items-center justify-center text-center mb-8 bg-primary-500 border border-primary-600 font-bold font-heading text-white hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200'
                                    type='submit'
                                    disabled={fContact.isInvalid || isLoading}
                                >
                                    {!isLoading ? "Enviar" : "Enviando..."}
                                </button>

                                <p className='text-gray-500 text-sm'>
                                    Procesamos su información de acuerdo con nuestra{" "}
                                    <a href='#' className='text-primary-500 text-sm font-semibold'>
                                        Política de privacidad
                                    </a>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
