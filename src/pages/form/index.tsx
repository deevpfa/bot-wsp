import Button from '@/components/MyButton';
import { TextField } from '@/components/form/TextField'
import { formatNumber } from '@/functions/formatNumber';
import { Form, FormSchema, Validators, useForm } from '@/lib/components/form';
import { Avatar } from '@material-tailwind/react';
import React from 'react'

const sSignUp: FormSchema<any> = {
    dni: { value: null, validators: [Validators.required] },
    mesa: { value: null, validators: [Validators.required] },
    votosMilei: { value: 0, validators: [Validators.required] },
    votosMassa: { value: 0, validators: [Validators.required] },
    votosNulos: { value: 0, validators: [Validators.required] },
    votosBlanco: { value: 0, validators: [Validators.required] },
};

const Formulario = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const handleOnSubmit = (data: any) => {

    }

    const fSignUp = useForm<any>(sSignUp);
    return (
        <Form className="space-y-5 mt-5 px-6" group={fSignUp} onSubmit={handleOnSubmit}>
            <div className='flex'>
                <h1 className='text-lg'>Elecciones</h1>
                <h1 className='text-white text-lg'>2023</h1>
            </div>
            <h1 className='text-white text-sm'>1- Ingresa tu dni y numero de mesa para corroborar si fuiste fiscal</h1>
            <div className="flex ">
                <TextField
                    hasFeedback
                    className='w-auto'
                    color='white'
                    name="firstName"
                    control={fSignUp.controls.dni}
                    label={'Dni'}
                />
                <TextField
                    color='white'
                    hasFeedback
                    className='w-auto'
                    name="lastName"
                    control={fSignUp.controls.mesa}
                    label={'Mesa'}
                />
            </div>
            <div className='py-6 grid grid-cols-1 gap-y-5'>
                <h1 className='text-white text-sm'>2- Ingresa la cantidad de votos de cada uno</h1>
                <div className='flex items-center'>
                    <Avatar src='/images/milei.png' />
                    <div className='mx-4'>
                        <TextField
                            hasFeedback
                            color='white'
                            name="firstName"
                            control={fSignUp.controls.votosMilei}
                            label={'Cant. Votos Milei'}
                        />
                    </div>
                    <span className='text-white text-xs'>{formatNumber(fSignUp.controls.votosMilei.value) || 0} Votos</span>
                </div>
                <div className='flex items-center'>
                    <Avatar src='/images/massa.png' />
                    <div className='mx-4'>
                        <TextField
                            hasFeedback
                            color='white'
                            name="firstName"
                            control={fSignUp.controls.votosMassa}
                            label={'Cant. Votos Massa'}
                        />
                    </div>
                    <span className='text-white text-xs'>{formatNumber(fSignUp.controls.votosMassa.value) || 0} Votos</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-white'>Blanco</span>
                    <div className='mx-4'>
                        <TextField
                            hasFeedback
                            color='white'
                            name="firstName"
                            control={fSignUp.controls.votosBlanco}
                            label={'Cant. Votos'}
                        />
                    </div>
                    <span className='text-white text-xs'>{formatNumber(fSignUp.controls.votosBlanco.value) || 0} Votos</span>
                </div>
                <div className='flex items-center'>
                    <span className='text-white'>Nulos</span>
                    <div className='mx-5'>
                        <TextField
                            hasFeedback
                            color='white'
                            name="firstName"
                            control={fSignUp.controls.votosNulos}
                            label={'Cant. Votos'}
                        />
                    </div>
                    <span className='text-white text-xs'>{formatNumber(fSignUp.controls.votosNulos.value) || 0} Votos</span>
                </div>
            </div>
            <div className='mt-2'>
                <h1 className='text-white text-sm mb-2'>3- Subi una Foto de la Copia del telegrama</h1>
                <Button fullWidth color='white' className='text-center'>Subir Telegrama</Button>
            </div>

            <Button className="text-sm text-light-blue-500 opacity-1" type="submit" disabled={!fSignUp.isValid} color="white" fullWidth size="md" isFetching={isLoading}>Enviar</Button>
        </Form>
    )
}

export default Formulario